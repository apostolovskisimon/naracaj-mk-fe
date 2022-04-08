import ShowToast from './showtoast';

export const errorHandler = error => {
  const response = error?.response?.data?.message || '';
  return ShowToast({ title: response, status: 'error' });
};

export const successHandler = data => {
  // const response =  data?.message || data;
  return ShowToast({ title: data, status: 'success' });
};
