import React from 'react';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import { Text, StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },

});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar/>
        <Switch>
            <Route path="/" exact>
                <RepositoryList/>
            </Route>
            <Route path="/signin" exact>
                <SignIn />
            </Route>
            <Redirect to="/" />
        </Switch>
    </View>
  );
};

export default Main;