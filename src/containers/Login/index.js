import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Paper,
  Header,
  Button,
  TextField,
  BusyLoader,
} from 'components';

import { loginToSystem } from 'actions/login';

import { politecLogoBg } from 'assets';

import './style.scss';

const mapStateToProps = ({ systemLogin }) => ({ systemLogin });

const Login = ({
  systemLogin,
  loginToSystem,
}) => {

  const [filter, setFilter] = useState({ email: null, password: null });
  const [isBusy, setIsBusy] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({ ...filter , [name]: value  });
  };

  const onSave = () => {
    setIsBusy(true);
    setTimeout(() => {
      loginToSystem(true);
    }, 2000);
  };

  return (
    <Paper>
      <Header />
      <Paper className='form_block' style={{ backgroundImage: `url(${politecLogoBg})` }}>
        <BusyLoader isBusy={isBusy}>
          <Paper className="image-block">
            <h1>{"Մուտք օնլայն ուսուցման համակարգ"}</h1>
          </Paper>
          <Paper className="autorize-block" flexName="flexible vertical aCenter">
            <TextField
              name="email"
              label={"Օգտվողի անուն"}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label={"Գաղտնաբառ"}
              onChange={handleChange}
              type="password"
            />
            <Paper className='buttonContent'>
              <Button onClick={onSave}>
                {"Մուտք"}
              </Button>
            </Paper>
          </Paper>
        </BusyLoader>
      </Paper>
    </Paper>
  )
};

export default connect(mapStateToProps, {
  loginToSystem
})(Login);
