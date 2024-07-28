import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const questions = [
    {
        id: 1,
        question: "India to win the 2nd T20I vs Sri Lanka?",
        info: "H2H last 5 T20: IND 3, SL 2, DRAW 0",
        yesValue: "₹7.3",
        noValue: "₹2.7"
    },
    {
        id: 2,
        question: "Bitcoin to be priced at 67460.01 USDT or more at 11:50 AM?",
        info: "Bitcoin open price at 11:40 AM was 67460.01 USDT.",
        yesValue: "₹9.5",
        noValue: "₹0.5"
    },
];

const QuestionPage = () => {
    return (
        <ScrollView style={styles.container}>
            {questions.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Text style={styles.question}>{item.question}</Text>
                    <Text style={styles.info}>{item.info}</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButtonYes}>
                            <Text style={styles.optionText}>Yes {item.yesValue}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtonNo}>
                            <Text style={styles.optionText}>No {item.noValue}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    optionButtonYes: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
    },
    optionButtonNo: {
        flex: 1,
        backgroundColor: '#F44336',
        padding: 10,
        borderRadius: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default QuestionPage;
