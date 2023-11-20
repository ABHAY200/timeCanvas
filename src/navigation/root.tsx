import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setTopLevelNavigator} from './navigationUtils';
import BottomTabs from './tabNavigator';

export type RootStackParamList = {
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer
    ref={navigatorRef => {
      setTopLevelNavigator(navigatorRef);
    }}>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        options={{headerShown: false}}
        component={BottomTabs}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
