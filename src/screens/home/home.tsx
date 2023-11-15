import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Style from './styles';

const Home = () => {
  const styles = Style();
  useEffect(() => {
    console.log('render');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Abhay Test App</Text>
    </View>
  );
};

export default Home;
