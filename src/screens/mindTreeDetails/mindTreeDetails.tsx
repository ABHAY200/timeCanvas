import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MindTreeDetails = ({route}) => {
  const navigation: any = useNavigation();
  const mindData = route.params?.mindData || {};

  const navigateToDetails = data => {
    navigation.push('MindTreeDetails', {mindData: data});
  };

  const treeItem = node => (
    <TouchableOpacity
      onPress={() => navigateToDetails(node)}
      key={node.id}
      style={styles.node}>
      <Text>{node.title}</Text>
      {node?.description && (
        <Text style={styles.description}>{node.description}</Text>
      )}
    </TouchableOpacity>
  );

  const createChild = parentNode => {
    navigation.push('CreateMindTree', {parentNode});
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{mindData?.title}</Text>
        <TouchableOpacity onPress={() => createChild(mindData)}>
          <Text>Add Child</Text>
        </TouchableOpacity>
      </View>
      {mindData?.description && (
        <Text style={styles.description}>{mindData.description}</Text>
      )}
      {mindData?.subtree?.map(item => treeItem(item))}
    </View>
  );
};

export default MindTreeDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000',
  },
  node: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
  },
  subtree: {
    marginLeft: 10,
  },
  description: {
    fontStyle: 'italic',
  },
  subNode: {
    borderWidth: 1,
    borderColor: 'red',
    marginRight: 30,
    margin: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
