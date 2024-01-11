import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../HomeScreen'
import BottomTab from '../BottomTabNav.js/BottomTab'
import LikedYou from '../LikedYou'
import Chat from '../Chat'
import Profile from '../Profile'
import Main from '../Main'

const Navigations = () => {
    const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>

        </Stack.Navigator>


      </NavigationContainer>
        )
}

export default Navigations