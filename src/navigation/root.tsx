import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {setTopLevelNavigator} from './navigationUtils';
import MindTreeDetails from '../screens/mindTreeScreens/mindTreeDetails/mindTreeDetails';
import CreateMindTree from '../screens/mindTreeScreens/createMindTree/createMindTree';
import ConsolidatedThoughts from '../screens/mindTreeScreens/consolidatedThoughts/consolidatedThoughts';
import AlcoholDataListing from '../screens/alcoholDataScreens/alcoholDataListing/alcoholDataListing';
import AddAlcoholData from '../screens/alcoholDataScreens/addAlcoholData/addAlcoholData';

import BottomTabs from './tabNavigator';

export type RootStackParamList = {
  BottomTabs: undefined;
  MindTreeDetails: undefined;
  CreateMindTree: undefined;
  ConsolidatedThoughts: undefined;
  AlcoholDataListing: undefined;
  AddAlcoholData: undefined;
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
      <Stack.Screen
        name="AlcoholDataListing"
        options={{headerShown: false}}
        component={AlcoholDataListing}
      />
      <Stack.Screen
        name="AddAlcoholData"
        options={{headerShown: false}}
        component={AddAlcoholData}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
