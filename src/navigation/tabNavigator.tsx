import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home/home';
import Music from '../screens/music/music';
import Goals from '../screens/goal/goal';
import HomeActive from '../assets/icons/homeActive.svg';
import HomeInactive from '../assets/icons/homeInactive.svg';
import MusicActive from '../assets/icons/musicActive.svg';
import MusicInactive from '../assets/icons/musicInactive.svg';
import GoalsActive from '../assets/icons/goalActive.svg';
import GoalsInactive from '../assets/icons/goalInactive.svg';

const Tab = createBottomTabNavigator();

interface icons {
  Home: JSX.Element;
  Music: JSX.Element;
  Goals: JSX.Element;
}

const BottomTabs = () => {
  const tabRoutes = [
    {
      name: 'Home',
      target: 'Home',
    },
    {
      name: 'Music',
      target: 'Music',
    },
    {
      name: 'Goals',
      target: 'Goals',
    },
  ];

  const renderTabBarIcon = (route: string, focused: boolean) => {
    const focusedIcons: icons = {
      Home: <HomeActive />,
      Music: <MusicActive />,
      Goals: <GoalsActive />,
    };

    const unfocusedIcons: icons = {
      Home: <HomeInactive />,
      Music: <MusicInactive />,
      Goals: <GoalsInactive />,
    };

    return focused
      ? focusedIcons[route as keyof icons]
      : unfocusedIcons[route as keyof icons];
  };

  const tabScreens = {
    Home,
    Music,
    Goals,
  };

  const styles = {
    tabBarStyle: {
      // backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
      display: 'flex',
      position: 'absolute',
      elevation: 2,
      backgroundColor: '#000122',
      borderRadius: 30,
      height: 54,
      overflow: 'hidden',
      marginBottom: 10,
      borderWidth: 1,
      borderTopWidth: 1,
      borderColor: '#fff',
      marginHorizontal: 25,
    },
    box: {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Music"
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => renderTabBarIcon(route.name, focused),
        headerShown: false,
      })}>
      {tabRoutes.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tabScreens[tab.target]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
