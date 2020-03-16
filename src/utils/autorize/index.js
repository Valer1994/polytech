import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Login from '../../containers/Login';

const mapStateToProps = ({ systemLogin }) => ({ systemLogin });

const Autorize = ({
  systemLogin,
  children,
}) => {

  useEffect(() => {
    if(systemLogin) {
      window.localStorage.setItem('token', systemLogin);
    }
  },[systemLogin]);

  return systemLogin || window.localStorage.getItem('token')
  ? children
  : <Login/>
};

export default connect(mapStateToProps, null)(Autorize);
