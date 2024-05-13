import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import radioStations from '../data/radioStations.json';

const HomeScreen = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(radioStations);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        data={stations}
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50,
  },
  stationItem: {
    padding: 10,
  },
});

export default HomeScreen;