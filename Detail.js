import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

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

const Detail = ({ route }) => {
    const { itemDetails } = route.params; // Get the data passed from the Home screen

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Car Park Details</Text>
            <View style={styles.item}>
                <Text style={[styles.text, styles.title]}>Car Park No: {itemDetails.car_park_no}</Text>
                <Text style={styles.text}>Address: {itemDetails.address}</Text>
                <Text style={styles.text}>X Coordinate: {itemDetails.x_coord}</Text>
                <Text style={styles.text}>Y Coordinate: {itemDetails.y_coord}</Text>
                <Text style={styles.text}>Car Park Type: {itemDetails.car_park_type}</Text>
                <Text style={styles.text}>Type of Parking System: {itemDetails.type_of_parking_system}</Text>
                <Text style={styles.text}>Short Term Parking: {itemDetails.short_term_parking}</Text>
                <Text style={styles.text}>Free Parking: {itemDetails.free_parking}</Text>
                <Text style={styles.text}>Night Parking: {itemDetails.night_parking}</Text>
                <Text style={styles.text}>Car Park Decks: {itemDetails.car_park_decks}</Text>
                <Text style={styles.text}>Gantry Height: {itemDetails.gantry_height}</Text>
                <Text style={styles.text}>Car Park Basement: {itemDetails.car_park_basement}</Text>
            </View>
        </ScrollView>
    );
};

export default Detail;
