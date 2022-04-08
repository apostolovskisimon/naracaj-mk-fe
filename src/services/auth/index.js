import axios from 'axios';
import { API_URL } from '..';
import { ROUTE_LOGIN, ROUTE_REGISTER } from '../apiRoutes';

const register = data => axios.post(API_URL + ROUTE_REGISTER, data);

const login = data => axios.post(API_URL + ROUTE_LOGIN, data);

const AuthService = {
  register,
  login,
};

export default AuthService;
