import React from 'react';
import {
  Icon,
  Paper,
} from 'components';

import { logo } from 'assets';

import './style.scss';

const Header = ({ withLogOut }) => {

  const logOut = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Paper className='Header'>
      <Paper className='header_content'>
        <img src={logo} alt=""/>
        <p>Հայաստանի ազգային պոլիտեխնիկական համալսարան</p>
      </Paper>
      {withLogOut &&
        <Paper
          className="logout-button"
          flexName="flexible aCenter"
          onClick={logOut}
        >
          Դուրս գալ
          <Icon className="icon-feather-log-out" />
        </Paper>
      }
    </Paper>
  )
};

export default Header;
