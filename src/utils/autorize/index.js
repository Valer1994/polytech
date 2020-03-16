import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Login from '../../containers/Login';

const mapStateToProps = ({ login }) => ({ login });

const Autorize = ({
  login,
  children,
}) => {

  useEffect(() => {
    if(login) {
      window.localStorage.setItem('token', login.data.token);
    }
  },[login]);

  return login || window.localStorage.getItem('token')
  ? children
  : <Login/>
};

export default connect(mapStateToProps, null)(Autorize);
