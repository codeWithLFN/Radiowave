import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import NowPlayingBar from '../components/NowPlayingBar';

const StationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { station } = route.params;
  const [currentStation, setCurrentStation] = useState(station);
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause status

  const handlePlay = () => {
    // Implement play functionality here
    setIsPlaying(true);
    setCurrentStation(station);
    navigation.navigate('Player', { station: station });
    

  };

  const handlePause = () => {
    // Implement pause functionality here
    // Example: Pause the station's stream
    setIsPlaying(false);

    
    
  };

  const handleStop = () => {
    // Implement stop functionality here
    // Example: Stop the station's stream
    setIsPlaying(false);
    setCurrentStation(null);
    
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: station.image }} style={styles.image} />
      <Text style={styles.name}>{station.name}</Text>
      <Text style={styles.genre}>{station.genre}</Text>
      <Button title="Play" onPress={handlePlay} disabled={isPlaying} />
      <Button title="Pause" onPress={handlePause} disabled={!isPlaying} />
      <Button title="Stop" onPress={handleStop} disabled={!isPlaying} />
      <NowPlayingBar 
        station={currentStation} 
        onPress={() => navigation.navigate('Player', { station: currentStation })} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB',
    marginBottom: 10,
  },
  genre: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
});

export default StationScreen;
