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
import { useTranslator } from '../../utils/translator';

import './style.scss';

const mapStateToProps = ({ login }) => ({ login });

const Login = ({
  login,
  loginToAdmin,
}) => {

  const [filter, setFilter] = useState({ email: null, password: null });
  const [isBusy, setIsBusy] = useState(false);

  const { t } = useTranslator()

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
            <h1>{t('_Entrance_')}</h1>
          </Paper>
          <Paper className="autorize-block" flexName="flexible vertical aCenter">
            <TextField
              name="email"
              label={t('_Username_')}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label={t('_Password_')}
              onChange={handleChange}
              type="password"
            />
            <Paper className='buttonContent'>
              <Button onClick={onSave}>
                {t('_SignIn_')}
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