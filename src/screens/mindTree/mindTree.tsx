import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const mindTree = [
  {
    id: '1',
    title: 'test 1',
    description: 'desc 1',
    subtree: [
      {
        id: '11',
        title: 'test 11',
        description: 'desc 11',
        subtree: [
          {
            id: '111',
            title: 'test 111',
            description: 'desc 111',
          },
        ],
      },
      {
        id: '12',
        title: 'test 12',
        description: 'desc 12',
      },
    ],
  },
  {
    id: '2',
    title: 'test 2',
    description: 'desc 2',
    subtree: [
      {
        id: '21',
        title: 'test 21',
        description: 'desc 21',
      },
      {
        id: '22',
        title: 'test 22',
        description: 'desc 22',
      },
    ],
  },
  {
    id: '3',
    title: 'test 3',
    description: 'desc 3',
  },
  {
    id: '4',
    title: 'test 4',
    description: 'desc 4',
  },
  {
    id: '5',
    title: 'test 5',
    description: 'desc 5',
  },
  {
    id: '6',
    title: 'test 6',
    description: 'desc 6',
  },
  {
    id: '7',
    title: 'test 7',
    description: 'desc 7',
  },
  {
    id: '8',
    title: 'test 8',
    description: 'desc 8',
  },
  {
    id: '9',
    title: 'test 9',
    description: 'desc 9',
  },
  {
    id: '10',
    title: 'test 10',
    description: 'desc 10',
  },
  {
    id: '11',
    title: 'test 11',
    description: 'desc 11',
  },
  {
    id: '12',
    title: 'test 12',
    description: 'desc 12',
  },
];

const MindTree = () => {
  const navigation: any = useNavigation();

  const navigateToDetails = mindData => {
    navigation.push('MindTreeDetails', {mindData});
  };

  const createNew = () => {
    navigation.push('CreateMindTree', {id: null});
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

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Mind tree</Text>
        <TouchableOpacity onPress={createNew}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>{mindTree?.map(item => treeItem(item))}</ScrollView>
    </View>
  );
};

export default MindTree;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
