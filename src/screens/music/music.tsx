import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import LottieView from 'lottie-react-native';

import MusicAnimation from '../../assets/lotties/lottie_1.json';

import Style from './styles';

const musicList = [
  {
    id: 1,
    label: 'Tamil',
    color: '#218B82',
    url: 'FoDAUyfCKLA',
  },
  {
    id: 2,
    label: 'Malayalam',
    color: '#F27348',
    url: 'wPV0msG1i7Q',
  },
  {
    id: 3,
    label: 'Hindi',
    color: '#554994',
    url: '-BvfIfhZnak',
  },
  {
    id: 4,
    label: 'English',
    color: '#594545',
    url: '36YnV9STBqc',
  },
  {
    id: 5,
    label: 'News',
    color: '#D35D6E',
    url: 'V_MXWptocIE',
  },
  {
    id: 6,
    label: 'Verbal',
    color: '#046582',
    url: '0_A9J3q3SrE',
  },
];

const Music = () => {
  const styles = Style();

  const [musicUrl, setMusicUrl] = useState('wPV0msG1i7Q');

  const renderYoutubePlayer = () => (
    <View>
      <YoutubePlayer
        height={1}
        width={1}
        play
        videoId={musicUrl}
        onChangeState={() => null}
      />
      <Text style={styles.title}>TimeCanvas</Text>
    </View>
  );

  const renderAnimation = () => (
    <LottieView
      style={styles.lottieContainer}
      source={MusicAnimation}
      autoPlay
      loop
    />
  );

  const renderButton = (buttonProps: {
    id: number;
    label: string;
    color: string;
    url: string;
  }) => (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonProps.color}]}
      onPress={() => setMusicUrl(buttonProps.url)}
      key={buttonProps.id}>
      <Text style={styles.buttonLabel}>{buttonProps.label}</Text>
    </TouchableOpacity>
  );

  const renderButtons = () => (
    <ScrollView>
      <View style={styles.buttonContainer}>
        {musicList?.map(item => renderButton(item))}
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {renderYoutubePlayer()}
      {renderAnimation()}
      {renderButtons()}
    </View>
  );
};

export default Music;
