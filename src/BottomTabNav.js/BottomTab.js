import { Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikedYou from '../LikedYou';
import Chat from '../Chat';
import Profile from '../Profile';
import HomeScreen from '../HomeScreen';
import Images from '../Images';
import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#bd2aba', 
        inactiveTintColor: 'gray',
      }} initialRouteName='Chat'>
    <Tab.Screen name="Home" component={HomeScreen}  options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.Home}
                
              />
            );
          },
        }} />
    <Tab.Screen name="Liked You" component={LikedYou}  options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.like}
                
              />
            );
          },
        }}/>
    <Tab.Screen name="Chat" component={Chat}  options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.chat}
                
              />
            );
          },
        }}/>
    <Tab.Screen name="Profile" component={Profile}  options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{height: 20, width: 20, tintColor: color}}
                source={Images.profile}
                
              />
            );
          },
        }}/>


  </Tab.Navigator>
  )
}

export default BottomTab