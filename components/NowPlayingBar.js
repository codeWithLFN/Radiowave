import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NowPlayingBar = ({ station, onPress }) => {
  if (!station) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: station.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{station.name}</Text>
        <Text style={styles.genre}>{station.genre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
  },
  genre: {
    color: '#ccc',
  },
});

export default NowPlayingBar;
