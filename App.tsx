import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';

import {getStore} from './src/store';
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
    <Provider store={getStore().store}>
      <ToastProvider>
        <View style={backgroundStyle}>
          <StatusBar
            backgroundColor={isDarkMode ? colors.DARK_1 : colors.LIGHT_1}
          />
          <Root />
        </View>
      </ToastProvider>
    </Provider>
  );
};

export default App;
