import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View,Text  } from 'react-native';

//Screens
import { OnBoarding } from './app/screens';


const Stack = createStackNavigator();

const App = () => {
  return(
      <NavigationContainer >
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} screenOptions={{headerShown:false}} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;