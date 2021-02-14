import React from 'react';

import { Text, TextInput, StyleSheet } from 'react-native';

const input = ({ onChange, value }) => {

    return <TextInput onChangeText={onChange} value={value} style={styles.input} />
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 20,
        height: 50
    }
})
export default input;
