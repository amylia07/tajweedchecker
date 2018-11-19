import React from 'react';
import { TabNavigator } from 'react-navigation';


import LearnScreen from '../tabscreen/LearnScreen';
import ProfileScreen from '../tabscreen/ProfileScreen';
import QuizScreen from '../tabscreen/QuizScreen';

export const Tab = TabNavigator ({
    Home: { screen: LearnScreen },
    Quiz: {screen: QuizScreen },
    Profile: {screen: ProfileScreen }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintiColor: '#f2f2f2',
        activeBackgroundColor: "#2EC4B6",
        inactiveTintColor: '#666',
        labelStyle: {
            fontSize: 10,
            padding: 10
        }
    }
}

);