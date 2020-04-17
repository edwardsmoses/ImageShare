
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';


export default function Index({ styles, imagePickerMethod }) {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.instructions}>
                To share a photo from your phone with your friends, press the button below to get started!
             </Text>
            <TouchableOpacity
                onPress={imagePickerMethod}
                style={styles.button}>
                <Text style={styles.buttonText}>Pick a Photo</Text>
            </TouchableOpacity>
        </View>
    )
}