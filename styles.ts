import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Style() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    testColor: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
  });

  return styles;
}

export default Style;
