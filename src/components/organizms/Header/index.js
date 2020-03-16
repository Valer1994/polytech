import React from 'react';
import { Paper } from '../../';
import { logo } from '../../../assets';

import { useTranslator } from '../../../utils/translator';

import './style.scss';

const Header = () => {

    const { t } = useTranslator()

    return  <Paper className='Header'>
                <Paper className='header_content'>
                    <img src={logo} alt=""/>
                    <p>{t('_Nationalpolytechnicuniversityofarmenia_')}</p>
                </Paper>
            </Paper>
};

export default Header;