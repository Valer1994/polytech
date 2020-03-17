import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Icon,
  Paper,
} from 'components';

import './style.scss';

const Dropdown = ({
  data,
  label,
}) => {

  const [active, setActive] = useState();

  const dropdownData = useMemo(() => {
    if(!data || !data.length) return null;

    return data.map((item, key) => (
      <NavLink to="/details" key={key}>
        {item.name}
      </NavLink>
    ))
  }, [data]);

  return (
    <Paper className="Dropdown">
      <Paper className="Dropdown_label" onClick={() => setActive(!active)}>
        {label}
        <Icon className={active ? 'icon-feather-chevron-up' : 'icon-feather-chevron-down'} />
      </Paper>
      {
        active &&
        <Paper className="Dropdown_content flexible vertical">{dropdownData}</Paper>
      }
    </Paper>
  )
};

export default Dropdown;
