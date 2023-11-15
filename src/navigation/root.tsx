import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setTopLevelNavigator} from './navigationUtils';
import Home from '../screens/home/home';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer
    ref={navigatorRef => {
      setTopLevelNavigator(navigatorRef);
    }}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
