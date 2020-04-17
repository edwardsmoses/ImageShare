
import React, { Fragment } from 'react';
import { Text } from 'react-native';


export default function Logo({ styles }) {
    return (
        <Fragment>
            <Text style={styles.logoEmoji}>
                🌄
            </Text>
            <Text style={styles.logoText}>
                ImagePicker
             </Text>
        </Fragment>
    )
}