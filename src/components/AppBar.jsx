import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#24292e",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  scrollView: {
    flexDirection: "row",
    display: "flex"
  },
  links: {
      flexGrow: 5
  }, 
  text: {
    color: "#ffffff",
    fontWeight: "700",
    padding: 10,
    textAlign: "center"
  }
});

const AppBar = () => {
  return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <View style={styles.links}>
                        <Link to="/"><Text style={styles.text}>Repositories</Text></Link>
                    </View>
                    <View style={styles.links}>
                        <Link to="/signin"><Text style={styles.text}>Sing In</Text></Link>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
  );
};

export default AppBar;