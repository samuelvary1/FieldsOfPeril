import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import theme from './CustomProperties/Theme';
import HomeScreen from './Components/HomeScreen';
import NewGameScreen from './Components/NewGameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome to Fields of Peril'}}
            />
            <Stack.Screen
              name="NewGameScreen"
              component={NewGameScreen}
              options={{title: 'You are beginning a new journey...'}}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
