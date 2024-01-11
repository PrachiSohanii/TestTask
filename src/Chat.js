import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import TopTabBar from './TopTabBar';
   

const Chat = () => {
  return (
    <View style={styles.container}>
        <View><Text style={styles.mssgTxt}>Messages</Text></View>
        <TopTabBar/>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F8FE'
    },
    mssgTxt:{
        fontSize:responsiveFontSize(3),
        fontWeight:'bold',
        color:'black',
        marginVertical:responsiveHeight(4),
        marginLeft:responsiveWidth(5)
    }
})