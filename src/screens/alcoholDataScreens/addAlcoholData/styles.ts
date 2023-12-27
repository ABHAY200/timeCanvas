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
      marginBottom: 30,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: WINDOW_WIDTH,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: WINDOW_WIDTH * 0.5 - 20,
    },
    textInput: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      width: WINDOW_WIDTH * 0.5 - 20,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      height: 40,
      paddingBottom: 0,
      paddingHorizontal: 10,
      textAlignVertical: 'center',
      textAlign: 'center',
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
    addDataButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: WINDOW_WIDTH - 20,
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
