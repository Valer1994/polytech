import { SYSTEM_LOGIN } from 'configs/types';

export const loginToSystem = (darkMode) => ({
  type: SYSTEM_LOGIN,
  payload: darkMode
});
