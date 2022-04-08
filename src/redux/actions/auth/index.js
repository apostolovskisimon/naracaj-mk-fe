import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler, successHandler } from '../../../helpers/errorhandler';
import { handleLog } from '../../../helpers/loghandler';
import Navigation from '../../../RootNavigation';
import AuthService from '../../../services/auth';

export const handleSetUser = (state, action) => {
  state.currentUser = action.payload.user;
  state.auth = action.payload.tokens;
};

export const handleLogout = async (state, action) => {
  AsyncStorage.clear().then(() => {
    // state.currentUser = undefined;
    // state.auth = undefined;
    Navigation.replace('onboarding', { screen: 'Login' });
  });
};

export const registerUser = async (data, { setSubmitting }) => {
  try {
    const res = await AuthService.register(data);
    // Navigation.replace('dash', {
    //   screen: 'Dashboard',
    // });
    handleLog(res.data);
    successHandler('Registered successfully!');
  } catch (error) {
    errorHandler(error);
  } finally {
    setSubmitting(false);
  }
};

export const loginUser = createAsyncThunk('auth/login', async data => {
  try {
    const res = await AuthService.login(data);
    axios.defaults.headers.common.Authorization = `Bearer ${res.data?.tokens?.access?.token}`;
    Navigation.replace('dash', {
      screen: 'Dashboard',
    });
    return res.data;
  } catch (error) {
    errorHandler(error);
    return error;
  }
});
