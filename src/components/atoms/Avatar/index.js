import React from 'react';
import classnames from 'classnames';

import './style.scss';

const Avatar = ({
  src,
  width,
  height,
  borderRadius,
  className,
  ...restProps
}) => (
  <img
    src={src || 'https://capenetworks.com/static/images/testimonials/user-icon.svg'}
    alt={src}
    style={{
      width: width || 50,
      height: height || 50,
      borderRadius: borderRadius || '50%'
    }}
    className={classnames('Avatar',className)}
    {...restProps}
  />
);

export default Avatar;
