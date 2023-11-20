import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Root from './src/navigation/root';
import colors from './src/constants/colors';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        backgroundColor={isDarkMode ? colors.DARK_1 : colors.LIGHT_1}
      />
      <Root />
    </View>
  );
};

export default App;
