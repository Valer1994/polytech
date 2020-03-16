import React from 'react';
import { Paper } from '../../';
import { logo } from '../../../assets';

import './style.scss';

const Header = () => {

    return  <Paper className='Header'>
                <Paper className='header_content'>
                    <img src={logo} alt=""/>
                    <p>Հայաստանի ազգային պոլիտեխնիկական համալսարան</p>
                </Paper>
            </Paper>
};

export default Header;