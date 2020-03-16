import { combineReducers } from 'redux';
import createReducer from '../helpers/createReducer';

import { LOGIN, SYSTEM_LOGIN } from 'configs/types';

const login = createReducer(LOGIN);

const systemLogin = (state = false, action) => {
  switch (action.type) {
    case SYSTEM_LOGIN:
      return action.payload;
    default:
      return state;
  };
};

const rootReducer = combineReducers({
    login,
    systemLogin,
});

export default rootReducer;
