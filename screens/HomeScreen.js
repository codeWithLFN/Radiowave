import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import radioStations from '../data/radioStations.json';

const HomeScreen = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(radioStations);
  }, []);

  return (
    <View style={styles.container}>
      {/* Display centered logo */}
      <Image
        source={require('../assets/RADIOWAVE_LOGO_Transparent.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text style={styles.title}>Radio Stations</Text>
      <FlatList
        data={stations}
        numColumns={2} 
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.genre}>{item.genre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Modern background color
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498DB', // Primary color
  },
  stationItem: {
    padding: 10,
    width: '50%',
    backgroundColor: '#fff', // White background for each item
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ECC40', // Accent color
  },
  genre: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;