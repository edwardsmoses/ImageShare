
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import Logo from './Logo';

export default function Index({ styles, imagePickerMethod }) {
    return (
        <View style={styles.container}>
            <Logo styles={styles} />
            <Text style={styles.instructions}>
                To share a photo from your phone with your friends
             </Text>
            <Text style={styles.instructions}>
                Press the button below to get started!
             </Text>
            <TouchableOpacity
                onPress={imagePickerMethod}
                style={styles.button}>
                <Text style={styles.buttonText}>Pick a Photo</Text>
            </TouchableOpacity>
        </View>
    )
}