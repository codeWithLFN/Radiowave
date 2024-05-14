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
        style={styles.logo}
      />
      <Text style={styles.title}>Radio Stations</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
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
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB', // Primary color
  },
  stationItem: {
    padding: 10,
    width: '47%',
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
    marginBottom: 5,
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
  // Responsive styles
  '@media (max-width: 600px)': {
    stationItem: {
      width: '100%',
    },
    image: {
      width: 80,
      height: 80,
    },
    name: {
      fontSize: 16,
    },
    genre: {
      fontSize: 14,
    },
  },
  '@media (min-width: 601px) and (max-width: 1024px)': {
    stationItem: {
      width: '50%',
    },
    image: {
      width: 90,
      height: 90,
    },
    name: {
      fontSize: 17,
    },
    genre: {
      fontSize: 15,
    },
  },
  '@media (min-width: 1025px)': {
    stationItem: {
      width: '47%',
    },
    image: {
      width: 100,
      height: 100,
    },
    name: {
      fontSize: 18,
    },
    genre: {
      fontSize: 16,
    },
  },
  genre: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;