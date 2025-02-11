import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const datasetId = "d_23f946fa557947f93a8043bbef41dd09";
    const url = "https://data.gov.sg/api/action/datastore_search?resource_id=" + datasetId;

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setOriginalData(data.result.records);
                setMyData(data.result.records);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const FilterData = (text) => {
        if (text !== "") {
            let myFilteredData = originalData.filter((item) =>
                item.car_park_no.toLowerCase().includes(text.toLowerCase()) ||
                item.address.toLowerCase().includes(text.toLowerCase())
            );
            setMyData(myFilteredData);
        } else {
            setMyData(originalData);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { itemDetails: item })}>
                <View style={styles.item}>
                    <Text style={[styles.text, styles.title]}>Car Park No: {item.car_park_no}</Text>
                    <Text style={styles.text}>Address: {item.address}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.headerText}>Search Car Park:</Text>
            <TextInput
                style={styles.input}
                placeholder="Search by Car Park No or Address"
                onChangeText={FilterData}
            />
            <FlatList data={myData} renderItem={renderItem} keyExtractor={item => item._id.toString()} />
        </View>
    );
};

export default Home;
