import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setTopLevelNavigator} from './navigationUtils';
import MindTreeDetails from '../screens/mindTreeDetails/mindTreeDetails';
import CreateMindTree from '../screens/createMindTree/createMindTree';
import ConsolidatedThoughts from '../screens/consolidatedThoughts/consolidatedThoughts';
import BottomTabs from './tabNavigator';

export type RootStackParamList = {
  BottomTabs: undefined;
  MindTreeDetails: undefined;
  CreateMindTree: undefined;
  ConsolidatedThoughts: undefined;
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
      <Stack.Screen
        name="MindTreeDetails"
        options={{headerShown: false}}
        component={MindTreeDetails}
      />
      <Stack.Screen
        name="CreateMindTree"
        options={{headerShown: false}}
        component={CreateMindTree}
      />
      <Stack.Screen
        name="ConsolidatedThoughts"
        options={{headerShown: false}}
        component={ConsolidatedThoughts}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
