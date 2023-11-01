import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/Index';

import { AuthContextProvider } from './src/contexts/authContext/AuthContext';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
