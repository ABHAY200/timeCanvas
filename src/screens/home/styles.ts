import {StyleSheet, useColorScheme} from 'react-native';
import {WINDOW_WIDTH} from '../../constants/common';

import colors from '../../constants/colors';

function Style() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      fontWeight: '700',
      flex: 1,
      backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
      alignItems: 'center',
    },
    lottieContainer: {
      width: WINDOW_WIDTH,
      height: WINDOW_WIDTH,
    },
    title: {
      fontSize: 30,
      paddingTop: 30,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: WINDOW_WIDTH,
      padding: WINDOW_WIDTH * 0.05,
    },
    button: {
      width: WINDOW_WIDTH * 0.4,
      margin: WINDOW_WIDTH * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 3,
    },
    buttonLabel: {
      fontSize: 16,
      fontFamily: 'Poppins-Medium',
      color: colors.LIGHT_1,
    },
  });

  return styles;
}

export default Style;
