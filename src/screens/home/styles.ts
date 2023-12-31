import {StyleSheet, useColorScheme} from 'react-native';
import {colors} from '../../constants/colors';

function Style() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      fontWeight: '700',
      flex: 1,
      backgroundColor: isDarkMode ? colors.DARK_1 : colors.LIGHT_1,
    },
  });

  return styles;
}

export default Style;
