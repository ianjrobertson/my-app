import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CounterScreen from './CounterScreen';
import ClockScreen from './ClockScreen';
import DataScreen from './DataScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Counter" component={CounterScreen} />
            <Tab.Screen name = "Clock" component={ClockScreen} />
            <Tab.Screen name = "Data from API" component={DataScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;