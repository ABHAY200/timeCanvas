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
      padding: 10,
    },
    title: {
      fontSize: 24,
      paddingTop: 20,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    label: {
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
    },
    selectorContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 15,
    },
    selector: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.PRIMARY_01,
      borderRadius: 4,
      height: 30,
    },
    selected: {
      backgroundColor: colors.PRIMARY_01,
    },
    summeryTitle: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: isDarkMode ? colors.LIGHT_1 : colors.DARK_1,
      padding: 10,
      width: '100%',
    },
  });

  return styles;
}

export default Style;
