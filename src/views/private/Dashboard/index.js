import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Button } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../../components/Layout';
import { logOut } from '../../../redux/slices/auth';
import Navigation from '../../../RootNavigation';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.clear().then(() => {
      dispatch(logOut());
      Navigation.replace('onboarding', { screen: 'Login' });
    });
  };

  return (
    <Layout hideBackButton title="Home">
      <Box>Dashboard</Box>
      <Button onPress={() => handleLogout()}>Log out</Button>
    </Layout>
  );
};

export default Dashboard;
