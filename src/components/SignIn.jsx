import React from 'react';
import { TextInput, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Text from './Text'
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

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
    .number()
    .required('Password is required'),
});


const BodyMassIndexForm = ({ onSubmit }) => {
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
  const onSubmit = values => {
    console.log(values)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn