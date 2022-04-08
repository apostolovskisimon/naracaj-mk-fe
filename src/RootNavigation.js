import { StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current.navigate(name, params);
}

function replace(name, params) {
  navigationRef.current.dispatch(StackActions.replace(name, params));
}

const Navigation = {
  navigate,
  replace,
};

export default Navigation;
