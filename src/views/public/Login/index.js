import { ErrorMessage, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  StatusBar,
  Text,
  View,
} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import ErrorMsg from '../../../components/ErrorMsg';
import Layout from '../../../components/Layout';
import { handleLog } from '../../../helpers/loghandler';
import { loginUser } from '../../../redux/actions/auth';
import styles from './Login.styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be 6 chars long')
    .required('Password is required'),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const { currentUser, auth, loading } = useSelector(state => state.auth);

  handleLog({ currentUser, auth });
  return (
    <>
      <StatusBar barStyle="light-content" animated />
      <Layout title="Login" key={'btn1'} noHeader>
        <View style={styles.cont}>
          <Text
            fontWeight={'bold'}
            fontSize={32}
            textAlign="center"
            marginTop={5}
            marginBottom={5}>
            Welcome to naracaj.mk!
          </Text>
          <Image
            source={require('../../../assets/f1.jpg')}
            style={styles.img}
          />

          <Box w={'100%'} maxWidth="320px">
            <Box alignSelf={'center'} mt={'15px'}>
              Log in to continue
            </Box>
            <Formik
              initialValues={{
                email: 'simonAdmin@naracaj.mk',
                password: 'simonAdmin1',
              }}
              validationSchema={validationSchema}
              onSubmit={async values => {
                Keyboard.dismiss();
                dispatch(loginUser(values));
              }}>
              {({ values, handleBlur, handleChange, handleSubmit }) => (
                <Stack
                  space={1}
                  alignSelf="center"
                  px="4"
                  safeArea
                  mt="4"
                  w={{
                    base: '100%',
                    md: '25%',
                  }}>
                  <Box>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                      type="email"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                    />
                    <ErrorMessage
                      name="email"
                      render={msg => <ErrorMsg msg={msg} />}
                    />
                  </Box>
                  <Box>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                      type="password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                    />
                    <ErrorMessage
                      name="password"
                      render={msg => <ErrorMsg msg={msg} />}
                    />
                  </Box>
                  <Box mt="20px">
                    <Button
                      w={'60%'}
                      alignSelf="center"
                      _pressed={{
                        bg: 'orange.400',
                      }}
                      _loading={{
                        bg: 'orange.600',
                        opacity: 1,
                      }}
                      disabled={loading}
                      isLoading={loading}
                      bg="orange.600"
                      _text={{ color: 'white', fontWeight: 'bold' }}
                      onPress={() => handleSubmit()}>
                      Submit
                    </Button>
                  </Box>
                </Stack>
              )}
            </Formik>
          </Box>
          <Box>
            <Text size={'sm'} mt="20px">
              No account yet?
            </Text>
            <Button
              mb={8}
              width={'3/4'}
              _pressed={{
                bg: 'blue.500',
              }}
              bg="blue.700"
              alignSelf="center"
              marginTop={5}
              onPress={() => navigation.navigate('Register')}>
              Go to register
            </Button>
          </Box>
        </View>
      </Layout>
    </>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
