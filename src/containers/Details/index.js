import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Icon,
  Paper,
  Video,
} from 'components';

import './style.scss';

const Details = () => {
  return (
    <Paper className="Details">
      <NavLink to="/" className="flexible aCneter go-back" >
        <Icon className="icon-feather-arrow-left-circle" />
        Վերդառնալ
      </NavLink>
      <Video/>
    </Paper>
  )
};

export default Details;
