import React from 'react';

import { Paper } from '../../index';

import './style.scss';

const BusyLoader = ({ isBusy, children }) => (
  <Paper className="BusyLoader">
    {isBusy &&
      <Paper className="loading-content" flexName="flexible aCenter jCenter">
        <Paper className="loader" />
      </Paper>
    }
    {children}
  </Paper>
);

export default BusyLoader;
