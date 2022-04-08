import getTypes from '../helpers/getTypes';

export const auth = {
  LOGIN: getTypes('LOGIN'),
  REGISTER: getTypes('REGISTER'),
  LOGOUT: getTypes('LOGOUT'),
  CLEAN_DETAILS: getTypes('CLEAN_DETAILS'),
  EDIT_USER: getTypes('EDIT_USER'),
  PASSWORD_RESET: getTypes('PASSWORD_RESET'),
  USER_DETAILS: getTypes('USER_DETAILS'),
  EDIT_MODE: getTypes('EDIT_MODE'),
};
