import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NowPlayingBar from '../components/NowPlayingBar';
import Sound from 'react-native-sound';

const PlayerScreen = () => {
  const route = useRoute();
  const { station } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (station?.streamUrl) {
      const newSound = new Sound(station.streamUrl, null, (error) => {
        if (error) {
          console.log('Error loading sound:', error);
        }
      });

      setSound(newSound);

      return () => {
        if (newSound) {
          newSound.release();
        }
      };
    }
  }, [station.streamUrl]);

  const handlePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play((success) => {
          if (!success) {
            console.log('Playback failed due to audio decoding errors');
          }
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (sound) {
      sound.stop(() => {
        sound.setCurrentTime(0);
        setIsPlaying(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: station.image }} style={styles.image} />
      <Text style={styles.title}>{station.name}</Text>
      <Text style={styles.genre}>{station.genre}</Text>

      <View style={styles.controls}>
        <Button title={isPlaying ? "Pause" : "Play"} onPress={handlePlayPause} />
        <Button title="Stop" onPress={handleStop} />
      </View>

      <NowPlayingBar station={station} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genre: {
    fontSize: 18,
    color: '#666',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  nowPlayingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
  },
});

export default PlayerScreen;
