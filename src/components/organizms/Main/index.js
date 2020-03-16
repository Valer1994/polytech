import React from 'react';
import { NavLink } from 'react-router-dom';

import { Paper } from '../../';

import './style.scss';

const Main = () => {
    return  <Paper className='Main'>
                <NavLink to='/page'>Page</NavLink>
            </Paper>
};

export default Main;