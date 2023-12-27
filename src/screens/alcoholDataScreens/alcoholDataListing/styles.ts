import {StyleSheet, useColorScheme} from 'react-native';
import {WINDOW_WIDTH} from '../../../constants/common';

import colors from '../../../constants/colors';

function Style() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      fontWeight: '700',
      flex: 1,
      backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 24,
      paddingTop: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: WINDOW_WIDTH - 20,
      padding: 15,
      margin: 10,
    },
    danger: {
      backgroundColor: colors.DANGER,
    },
    warning: {
      backgroundColor: colors.WARNING,
    },
    cardLabel: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    cardValue: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    scrollView: {
      marginBottom: 70,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      borderTopWidth: 0.3,
      borderTopColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    viewGraphButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: WINDOW_WIDTH * 0.5 - 20,
      backgroundColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      height: 45,
      borderRadius: 10,
    },
    viewGraphButtonLabel: {
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
    },
    addDataButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: WINDOW_WIDTH * 0.5 - 20,
      backgroundColor: colors.PRIMARY_01,
      height: 45,
      borderRadius: 10,
    },
    addDataButtonLabel: {
      fontFamily: 'Poppins-Regular',
      color: colors.LIGHT_1,
    },
  });

  return styles;
}

export default Style;
