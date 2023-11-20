import React from 'react';
import {View, Text} from 'react-native';

import Style from './styles';

const Goals = () => {
  const styles = Style();

  return (
    <View style={styles.container}>
      <Text>Goals</Text>
    </View>
  );
};

export default Goals;
