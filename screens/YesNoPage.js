import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YesNoPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yes/No Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
    },
});

export default YesNoPage;
