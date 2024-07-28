import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width - 40;

const HomePage = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Probo</Text>
            </View>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryText}>Cricket</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryText}>Crypto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryText}>Olympics 2024</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryText}>Show more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>50% TDS Rebate up to 2500 INR on Monday</Text>
            </View>
            <View style={styles.trending}>
                <Text style={styles.trendingText}>Trending Now</Text>
                <View style={[styles.card, { width: cardWidth }]}>
                    <Text style={styles.question}>India to win the 2nd T20I vs Sri Lanka?</Text>
                    <Text style={styles.info}>H2H last 5 T20: IND 3, SL 2, DRAW 0</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButtonYes}>
                            <Text style={styles.optionText}>Yes ₹7.3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtonNo}>
                            <Text style={styles.optionText}>No ₹2.7</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.card, { width: cardWidth }]}>
                    <Text style={styles.question}>Bitcoin to be priced at 67460.01 USDT or more at 11:50 AM?</Text>
                    <Text style={styles.info}>Bitcoin open price at 11:40 AM was 67460.01 USDT.</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButtonYes}>
                            <Text style={styles.optionText}>Yes ₹9.5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButtonNo}>
                            <Text style={styles.optionText}>No ₹0.5</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    category: {
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 16,
    },
    banner: {
        backgroundColor: '#9b59b6',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    bannerText: {
        color: '#fff',
        textAlign: 'center',
    },
    trending: {
        padding: 10,
    },
    trendingText: {
        fontSize: 18,
        fontWeight: 'bold',
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

export default HomePage;
