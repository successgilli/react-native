import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const item = ({ id, value, onClick }) => {
    return (
        <TouchableOpacity onPress={() => onClick(id)} activeOpacity={0.5} style={styles.container}>
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        padding: 10,
        height: 50,
        marginBottom: 10
    }
})

export default item;
