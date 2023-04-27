import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    )
}

export default App
