import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CreateMindTree = ({route}) => {
  const id = route.params?.id || {};
  return (
    <View style={styles.container}>
      <Text>Create data ${id}</Text>
    </View>
  );
};

export default CreateMindTree;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000',
  },
});
