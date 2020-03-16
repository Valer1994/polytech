import { combineReducers } from 'redux';
import createReducer from '../helpers/createReducer';

import { LOGIN } from '../configs/types';

const login = createReducer(LOGIN);

const rootReducer = combineReducers({
    login
});

export default rootReducer;

