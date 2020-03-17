import React from 'react';
import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom';

import {
  Paper,
  Dropdown,
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
              <Paper flexName="flexible aCenter wrap">
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

              <Paper flexName="flexible aCenter wrap">
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
        <Paper className="documents-list flexible">
          <Paper flexName="flexible vertical">
            <h3>Քննական Առարկա</h3>
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
          </Paper>
          <Paper>
            <h3>Ստուգարքային Առարկա</h3>
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
          </Paper>
          <Paper>
            <h3>ԿԱ / ԿՆ</h3>
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
            <Dropdown
              label="Մաթեմատիկա"
              data={[
                { name: 'Գծային հանրահաշիվ' },
                { name: 'Կիրառական Մաթեմատիկա' },
                { name: 'Ինֆորմատիկա' },
              ]}
            />
          </Paper>
        </Paper>
      </Paper>
    )
};

export default connect(mapStateToProps,{})(Students);
