import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Counter from './counter';

const CounterScreen = () => {
    return (
        <View style ={styles.container}>
            <Counter />
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

export default CounterScreen;
