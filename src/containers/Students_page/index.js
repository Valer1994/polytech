import React from 'react';
import { connect } from 'react-redux';

import { useTranslator } from '../../utils/translator';

import Paper from '../../components/atoms/Paper';
import Video from '../../components/atoms/Video';
import Button from '../../components/atoms/Button';
import ImageUploader from '../../components/organizms/ImageUploader';

import './style.scss';
import { NavLink } from 'react-router-dom';

const mapStateToProps = ({ data} ) => ({ data });

const Students = ({
    data
}) => {

    const { t } = useTranslator();

    const routeChange = () => {

    }

    return (
        <Paper>
        <Paper className='studentContainer'> 
            <Paper>
                <ImageUploader />
            </Paper>
            <Paper className='studentDataContainer'>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>{t('_Name_')}</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valod</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>{t('_Surname_')}</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valodyan</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>{t('_FatherName_')}</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>Valodi</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>{t('_EMail_')}</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>ValodyanValod@gmail.com</span>
                    </Paper>
                </Paper>
                <Paper>
                    <Paper className='studentDataLabel'>
                        <span>{t('_PhoneNumber_')}</span>
                    </Paper>
                    <Paper className='studentData'>
                        <span>077777777</span>
                    </Paper>
                </Paper>
            </Paper>
        </Paper>
        <NavLink to='/video'>
            <Button>{t('_Video_')}</Button>
        </NavLink>
        {/* <Video /> */}
        </Paper>
    )
};

export default connect(mapStateToProps,{})(Students);