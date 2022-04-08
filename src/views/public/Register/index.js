import { ErrorMessage, Formik } from 'formik';
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  Text,
  View,
} from 'native-base';
import propTypes from 'prop-types';
import React, { useRef } from 'react';
import { Keyboard } from 'react-native';
import * as Yup from 'yup';
import ErrorMsg from '../../../components/ErrorMsg';
import Layout from '../../../components/Layout';
import { registerUser } from '../../../redux/actions/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be 6 chars long')
    .required('Password is required'),
  name: Yup.string().required('Name is required'),
});

const Register = () => {
  const handleRegister = (values, bag) => {
    Keyboard.dismiss();
    registerUser(values, bag);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <Layout title="Register">
      <View w="full" justifyContent={'center'} mt="20px">
        <Text textAlign="center">Fill the form to register</Text>
        <Center w="85%" alignSelf="center" mt="20px">
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}>
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
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
                <Box mb="15px">
                  <FormControl.Label isRequired>Name</FormControl.Label>
                  <Input
                    ref={nameRef}
                    type="text"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    onSubmitEditing={() => {
                      emailRef.current?.focus() || null;
                    }}
                  />
                  <ErrorMessage
                    name="name"
                    render={msg => <ErrorMsg msg={msg} />}
                  />
                </Box>
                <Box mb="15px">
                  <FormControl.Label isRequired>Email</FormControl.Label>
                  <Input
                    ref={emailRef}
                    type="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    onSubmitEditing={() => {
                      passwordRef.current?.focus() || null;
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    render={msg => <ErrorMsg msg={msg} />}
                  />
                </Box>
                <Box mb="15px">
                  <FormControl.Label isRequired>Password</FormControl.Label>
                  <Input
                    ref={passwordRef}
                    type="password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    onSubmitEditing={() => handleSubmit()}
                  />
                  <ErrorMessage
                    name="password"
                    render={msg => <ErrorMsg msg={msg} />}
                  />
                </Box>
                <Box mt="20px">
                  <Button
                    w={'60%'}
                    mb="15px"
                    alignSelf="center"
                    _pressed={{
                      bg: 'orange.400',
                    }}
                    _loading={{
                      bg: 'orange.600',
                      opacity: 1,
                    }}
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    bg="orange.600"
                    _text={{ color: 'white', fontWeight: 'bold' }}
                    onPress={() => handleSubmit()}>
                    Register
                  </Button>
                </Box>
              </Stack>
            )}
          </Formik>
        </Center>
      </View>
    </Layout>
  );
};

Register.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }),
};

export default Register;
