import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Clock from './Clock';

const ClockScreen = () => {
    return (
        <View style ={styles.container}>
            <Clock />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});

export default ClockScreen;