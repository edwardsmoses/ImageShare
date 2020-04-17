import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';


export default function SharePhoto({ styles, shareMethod, backMethod, selectedImg }) {
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
            <TouchableOpacity onPress={backMethod} style={styles.button}>
                <Text style={styles.buttonText}>
                    Back to 🏠
                </Text>
            </TouchableOpacity>
        </View>
    )
}