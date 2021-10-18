/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Album, MIN_HEADER_HEIGHT, HEADER_DELTA } from './Model';
import Header from './Header';
import Content from './Content';
import Cover from './Cover';
import ShufflePlay, { BUTTON_HEIGHT } from './ShufflePlay';
import Animated from 'react-native-reanimated';
interface AlbumProps {
  album: Album;
}

const { Value } = Animated;

export default ({ album }: AlbumProps) => {
  const { artist } = album;

  // const y = new Value(0);
  const y = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Cover {...{ y, album }} />
      <Content {...{ y, album }} />
      <Header {...{ y, artist }} />
      <View
        style={{
          position: 'absolute',
          top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
          left: 0,
          right: 0,
        }}>
        <ShufflePlay />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
