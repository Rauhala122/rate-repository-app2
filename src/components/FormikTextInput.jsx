import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a"
  },
  textInput: {
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 15,
    color: "#586069"
  },
  successBorder: {
    borderColor: "#586069"
  },
  errorBorder: {
    borderColor: "#d73a4a"
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={[styles.textInput, showError ? styles.errorBorder : styles.successBorder]}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;