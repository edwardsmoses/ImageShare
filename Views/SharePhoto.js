import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';


export default function SharePhoto({ styles, shareMethod, selectedImg }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedImg.localUri }}
                style={styles.thumbnail} />
            <Text style={styles.pickedThumbnailLabel}>
                Here is the Photo you picked.
        </Text>
            <TouchableOpacity onPress={shareMethod} style={styles.button}>
                <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
        </View>
    )
}