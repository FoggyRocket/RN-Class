import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoDemo from '../views/todoDemo';
import HomeScreen from '../views/homeScreen';

const Stack = createStackNavigator();

function RootRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}   options={{ title: 'Principal' }}
 />
                <Stack.Screen name="TodoDemo" component={TodoDemo} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default RootRoutes;