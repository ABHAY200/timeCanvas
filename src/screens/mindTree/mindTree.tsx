import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
];

const MindTree = () => {
  const renderSubtree = tree => (
    <View key={tree.id} style={styles.subNode}>
      <Text>{tree.title}</Text>
      <Text>{tree.description}</Text>
    </View>
  );

  const treeItem = node => (
    <>
      <View key={node.id} style={styles.node}>
        <Text>{node.title}</Text>
        {node?.description && (
          <Text style={styles.description}>{node.description}</Text>
        )}
      </View>
      {node?.subtree && (
        <View style={styles.subtree}>
          {node.subtree.map(subNode => renderSubtree(subNode))}
        </View>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <Text>Mind tree</Text>
      {mindTree?.map(item => treeItem(item))}
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
