//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from './assets/constants/theme';
import SignIn from './src/screens/AuthScreens/SignIn';
import DrawScreen from './src/screens/DrawScreen/DrawScreen';

// create a component
const App = () => {
  return (
    <SignIn />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});

//make this component available to the app
export default App;
