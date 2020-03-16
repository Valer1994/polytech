import CreateActionCreator from '../helpers/createActionCreator';
import { LOGIN } from '../configs/types';

export const loginToAdmin = data => CreateActionCreator.create({
    path: 'user/login',
    type: LOGIN,
    body: data,
    forLogin: true,
});
