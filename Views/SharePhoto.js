import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';


export default function SharePhoto({ styles, shareMethod, backMethod, selectedImg }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedImg.localUri }}
                style={styles.thumbnail} />
            <Text style={styles.pickedThumbnailLabel}>
                Here is the Photo you picked.
        </Text>
            <Button method={shareMethod} text="Share this Photo"></Button>
            <Button method={backMethod} text="  Back to 🏠"></Button>
        </View>
    )
}