import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import YesNoPage from '../screens/YesNoPage';
import QuestionPage from '../screens/QuestionPage';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="YesNo" component={YesNoPage} />
                <Stack.Screen name="Question" component={QuestionPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
