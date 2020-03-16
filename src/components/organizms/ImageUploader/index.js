import React, { useState, useEffect } from 'react';

import Icon from '../../atoms/Icon';
import Paper from '../../atoms/Paper';
import Avatar from '../../atoms/Avatar';

import './style.scss';

const ImageUploader = ({
  value,
  onChange,
}) => {

  const [imagePath, setImagePath] = useState(value);

  useEffect(() => {
    setImagePath(value);
  }, [value]);

  const handleChange = ({ target }) => {
    const selectedFile = target.files[0];

    if (selectedFile) {
      onChange(target.files[0]);
      const imagePromise = new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = function(){
          resolve(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      });

      imagePromise.then((img) => setImagePath(img));
    };
  };

  return (
    <Paper className="ImageUploader">
      <Avatar
        width={200}
        height={200}
        src={imagePath}
      />
      <Paper className="hidden-block" flexName="flexible aCenter jCenter">
        <Icon className="icon-feather-upload-cloud" />
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
        />
      </Paper>
    </Paper>
  )
};

export default ImageUploader;
