import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import AppIndex from './Views/Index';
import SharePhoto from './Views/SharePhoto';

export default function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  let unSetSelectedImage = () => {
    setSelectedImg(null);
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    Sharing.shareAsync(selectedImg.localUri);
  };

  if (selectedImg !== null) {
    return (
      <SharePhoto styles={styles}
        selectedImg={selectedImg}
        shareMethod={openShareDialogAsync}
        backMethod={unSetSelectedImage}
      ></SharePhoto>
    );
  }

  return (
    <AppIndex styles={styles} imagePickerMethod={openImagePickerAsync}></AppIndex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 159,
    marginBottom: 10
  },
  logoEmoji: {
    fontSize: 60,
    marginHorizontal: 40,
    alignContent: "center"
  },
  logoText: {
    fontSize: 28,
    marginHorizontal: 40,
    alignContent: "center",
    marginBottom: 20
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15
  },
  button: {
    backgroundColor: "#5844ed",
    padding: 20,
    marginTop: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  pickedThumbnailLabel: {
    color: '#5844ed',
    fontSize: 20,
    margin: 20
  }
});
