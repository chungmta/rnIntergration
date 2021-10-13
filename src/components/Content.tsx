import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Album, MAX_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import Track from "./Track";

interface ContentProps {
  album: Album;
}

export default ({ album: { artist, tracks } }: ContentProps) => {
  const height = MAX_HEADER_HEIGHT;
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}>
      <View style={styles.header}>
        <View style={[styles.gradient, { height }]}>
          <LinearGradient
            start={{ x: 0, y: 0.3 }}
            end={{ x: 1, y: 1 }}
            colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
            style={StyleSheet.absoluteFill}
          />
        </View>
        <View style={styles.artistContainer}>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <Track index={key + 1} {...{ track, key, artist }} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: MAX_HEADER_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: "black",
  },
});
