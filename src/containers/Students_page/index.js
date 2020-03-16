import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import {
    Paper,
    Button,
    ImageUploader,
} from '../../components';

import './style.scss';

const mapStateToProps = ({ data } ) => ({ data });

const Students = ({
    data
}) => {

    return (
        <Paper className="Students">
        <Paper className='studentContainer'>
            <Paper>
                <ImageUploader />
            </Paper>
            <Paper className='studentDataContainer'>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Անուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valod</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Ազգանուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valodyan</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Հայրանուն</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valodi</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Խումբ</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>խմբակ</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Էլեկտրոնային հասցե</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>ValodyanValod@gmail.com</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>Հեռախոսահամար</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>077777777</span>
                    </Paper>
                </Paper>
            </Paper>
        </Paper>
        <NavLink to='/video'>
            <Button>Video</Button>
        </NavLink>
        {/* <Video /> */}
        </Paper>
    )
};

export default connect(mapStateToProps,{})(Students);
