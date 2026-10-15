import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export default class App extends Component {
  state = {
    photos: [],
  };

  // TUGAS 1: Menampilkan Alert
  tampilkanAlert = () => {
    Alert.alert('Primakara Luar Biasa');
  };

  // TUGAS 2: Menampilkan 10 gambar dari galeri
  tampilkanGaleri = async () => {
    try {
      // Meminta izin akses galeri pada Android
      if (Platform.OS === 'android') {
        const permission =
          Number(Platform.Version) >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const granted = await PermissionsAndroid.request(permission);

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Izin Ditolak',
            'Aplikasi membutuhkan izin akses foto.',
          );
          return;
        }
      }

      // Mengambil 10 foto dari galeri
      const result = await CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
      });

      // Menyimpan foto ke state
      const photos = result.edges.map(edge => edge.node.image);

      this.setState({photos});

      if (photos.length === 0) {
        Alert.alert(
          'Foto Tidak Ditemukan',
          'Tidak ada foto yang dapat ditampilkan.',
        );
      }
    } catch (error) {
      Alert.alert('Gagal Memuat Foto', String(error));
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        {/* TUGAS 1: Button Alert */}
        <View style={styles.button}>
          <Button
            title="Tampilkan Alert"
            onPress={this.tampilkanAlert}
          />
        </View>

        {/* TUGAS 2: Button CameraRoll */}
        <View style={styles.button}>
          <Button
            title="Tampilkan 10 Gambar dari Galeri"
            onPress={this.tampilkanGaleri}
          />
        </View>

        {/* Menampilkan 10 gambar */}
        <View style={styles.grid}>
          {this.state.photos.map((photo, index) => (
            <Image
              key={`${photo.uri}-${index}`}
              source={{uri: photo.uri}}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </View>

        {/* Pesan sebelum gambar ditampilkan */}
        {this.state.photos.length === 0 && (
          <Text style={styles.info}>
            Tekan tombol untuk menampilkan foto dari galeri.
          </Text>
        )}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 40,
  },

  button: {
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#D8B4FE',
  },

  info: {
    marginTop: 12,
    textAlign: 'center',
  },
});