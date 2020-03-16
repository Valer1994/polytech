import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  Icon,
  Paper,
  ImageUploader,
} from 'components';

import './style.scss';

const mapStateToProps = ({ data } ) => ({ data });

const Students = ({
  data
}) => {

  const handleImageChange = (file) => {
    console.log(file);
  };

    return (
      <Paper className="Students">
        <Paper className='studentContainer'>
          <Paper>
              <ImageUploader
                onChange={handleImageChange}
              />
          </Paper>
          <Paper className='studentDataContainer'>
              <Paper flexName="flexible aCenter wrap jCenter">
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Անուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Գուրգեն</span>
                    </Paper>
                </Paper>
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Ազգանուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Ստեփանյան</span>
                    </Paper>
                </Paper>
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Հայրանուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Վարդանի</span>
                    </Paper>
                </Paper>
              </Paper>

              <Paper flexName="flexible aCenter wrap jCenter">
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Խումբ</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Կ218</span>
                    </Paper>
                </Paper>
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Էլեկտրոնային հասցե</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>stepanyangurgen@gmail.com</span>
                    </Paper>
                </Paper>
                <Paper className="key-value">
                    <Paper className='studentDataLabel'>
                        <span>Հեռախոսահամար</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>+37498303209</span>
                    </Paper>
                </Paper>
              </Paper>
          </Paper>
        </Paper>
        <Paper className="documents-list">
          <h3>Օնլայն դասընթացների տեսանյութեր</h3>
          <NavLink to="/details" className="flexible aCenter">
            Գծային Հանրահաշիվ
            <Icon className="icon-feather-external-link" />
          </NavLink>
          <NavLink to="/details" className="flexible aCenter">
            Ինֆորմատիկա
            <Icon className="icon-feather-external-link" />
          </NavLink>
          <NavLink to="/details" className="flexible aCenter">
            Կիրառական Մեխանիկա
            <Icon className="icon-feather-external-link" />
          </NavLink>
        </Paper>
      </Paper>
    )
};

export default connect(mapStateToProps,{})(Students);
