import React, {useEffect, useContext} from 'react';
import { TextInput, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Text from './Text'
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import { useHistory } from 'react-router-native'
import useSignIn from '../hooks/useSignIn'
import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage'
import createApolloClient from '../utils/apolloClient';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  submit: {
    color: "white",
    backgroundColor: "#2268cc",
    padding: 20,
    borderRadius: 4,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 15
  }
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Password" />
      <FormikTextInput name="password" placeholder="Username" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.submit}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const [authorize, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory()
  const apolloClient = useApolloClient()

  const addAccessToken = async (token) => {
    await authStorage.setAccessToken(token)
    apolloClient.resetStore();
    const a_token = await authStorage.getAccessToken()
    console.log(a_token)
  }

  useEffect(() => {
    if ( result.data ) {
      const token = result.data.authorize.accessToken
      try {
        addAccessToken(token)
        history.push("/")
      } catch (e) {
        console.log(e)
      }
    }
  }, [result.data]) // eslint-disable-line

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      authorize({ variables: {credentials: {username, password}}});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn