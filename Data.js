import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet } from 'react-native';

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAPI("https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=434"); //API link that pulls a json file for Jayson
    }, []);

    const fetchAPI = async (url) => {
        try {
            const response = await fetch(url); //insert API link
            console.log(response);
            const jsonData = await response.json();
            setData(jsonData.data);
        } catch(error) {
            console.error("Error fetching data: ", error);
        }
    };

    const renderList = ({ item }) => {
        return (
            <View style={styles.row}>
                {Object.keys(item).map(key => (
                    <View key={key} style={styles.item}>
                        <Text style={styles.itemKey}>{key}:</Text>
                        <Text style={styles.itemValue}>{item[key]}</Text>
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderList}
                keyExtractor={(index) => index.toString()}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    itemKey: {
        fontWeight: 'bold',
        marginRight: 4,
    },
    itemValue: {
        flex: 1,
    },
});

export default Data;