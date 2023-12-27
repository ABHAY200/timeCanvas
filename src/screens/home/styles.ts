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
      width: '100%',
      padding: 20,
    },
    addButton: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: colors.PRIMARY_01,
      marginTop: 20,
    },
    addButtonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Poppins-Medium',
    },
  });

  return styles;
}

export default Style;
