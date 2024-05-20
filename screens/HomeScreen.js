import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import radioStations from '../data/radioStations.json';
import NowPlayingBar from '../components/NowPlayingBar';

const HomeScreen = () => {
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [numColumns, setNumColumns] = useState(2);
  const [currentStation, setCurrentStation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setStations(radioStations);
    setFilteredStations(radioStations);
    const updateLayout = () => {
      const { width } = Dimensions.get('window');
      setNumColumns(width > 600 ? 2 : 2); // Always 2 columns, even on mobile
    };

    const dimensionListener = Dimensions.addEventListener('change', updateLayout);
    updateLayout();

    return () => {
      dimensionListener?.remove();
    };
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredStations(stations);
    } else {
      const filtered = stations.filter(station =>
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStations(filtered);
    }
  }, [searchQuery, stations]);

  const handlePress = (station) => {
    setCurrentStation(station);
    navigation.navigate('Station', { station });
  };

  const toggleFavorite = (station) => {
    let newFavorites;
    if (favorites.includes(station.id)) {
      newFavorites = favorites.filter(fav => fav !== station.id);
    } else {
      newFavorites = [...favorites, station.id];
    }
    setFavorites(newFavorites);
  };

  const isFavorite = (stationId) => {
    return favorites.includes(stationId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/RADIOWAVE_LOGO_Transparent.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Radio Stations</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a station..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredStations}
        numColumns={numColumns}
        key={numColumns} // This forces a re-render when numColumns changes
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.stationInfo}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.genre}>{item.genre}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <NowPlayingBar station={currentStation} onPress={() => navigation.navigate('Player', { station: currentStation })} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  stationItem: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stationInfo: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#2ECC40',
  },
  genre: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  favoriteButton: {
    fontSize: 16,
    color: '#3498DB',
    marginTop: 10,
  },
});

export default HomeScreen;
