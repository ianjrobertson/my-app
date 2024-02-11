import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Data from './Data';

const DataScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>Jayson Tatum 2023 Stats:</Text>
            <Text>from balldontlie.io</Text>
            <Data />
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

export default DataScreen;