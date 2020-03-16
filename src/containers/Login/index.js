import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Paper,
  Modal,
  Header,
  Button,
  TextField,
  BusyLoader,
} from '../../components';

import { loginToAdmin } from '../../actions/user';

import './style.scss';

const mapStateToProps = ({ login }) => ({ login });

const Login = ({
  login,
  loginToAdmin,
}) => {

  const [filter, setFilter] = useState({ email: null, password: null });
  const [isBusy, setIsBusy] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({ ...filter , [name]: value  });
  };

  const onSave = () => {
    setIsBusy(true);
    loginToAdmin(filter);
  };

  return (
    <Paper>
      <Header />
      <Paper className='form_block'>
        <BusyLoader isBusy={isBusy}>
          <Paper className="image-block">
            <h1>{"Մուտք ուսանողի էջ"}</h1>
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
  loginToAdmin
})(Login);