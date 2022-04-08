import React, { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/public/Login';
import Register from '../views/public/Register';
import Dashboard from '../views/private/Dashboard';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../views/private/Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Box } from 'native-base';
import { COLORS } from '../styles/globalStyles';
import { useSelector } from 'react-redux';
import { handleLog } from '../helpers/loghandler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{ header: () => null }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Tab.Navigator
    initialRouteName="Profile"
    screenOptions={{
      header: () => null,
      tabBarStyle: { paddingBottom: 5, height: '9%' },
      tabBarLabelStyle: { fontSize: 16 },
      tabBarActiveTintColor: COLORS.orange,
    }}>
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name="android"
            size={26}
            color={focused ? COLORS.darkBlue : COLORS.orange}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile2"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name="all-inclusive"
            size={26}
            color={focused ? COLORS.darkBlue : COLORS.orange}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const PrivateStack = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    screenOptions={{ header: () => null }}>
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="ProfileStack" component={ProfileStack} />
  </Drawer.Navigator>
);

const Routes = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { currentUser, auth } = useSelector(state => state.auth);
  console.log({ currentUser, auth });
  useFocusEffect(
    React.useCallback(() => {
      const canLogin = currentUser || auth;
      setIsLoggedIn(canLogin);
      setIsMounted(true);
    }, [currentUser, auth]),
  );

  useEffect(() => {
    const canLogin = currentUser || auth;
    setIsLoggedIn(canLogin);
    setIsMounted(true);
  }, [currentUser, auth]);

  if (!isMounted) return null;

  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={isLoggedIn ? 'dash' : 'onboarding'}>
      <Stack.Screen name="onboarding" component={OnboardingStack} />
      <Stack.Screen name="dash" component={PrivateStack} />
    </Stack.Navigator>
  );
};

export default Routes;
