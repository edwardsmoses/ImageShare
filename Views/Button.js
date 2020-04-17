
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Button({ text, method }) {
    return (
        <TouchableOpacity
            onPress={method}
            style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5844ed",
        padding: 20,
        marginTop: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
});
