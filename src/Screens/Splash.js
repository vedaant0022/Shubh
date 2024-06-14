import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput, StyleSheet, ActivityIndicator } from 'react-native'

import React, { useEffect, useState } from 'react';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Splash = ({navigation}) => {

    useEffect(() =>{
        setTimeout(()=>{
            fetchUserData();
        },2000);
    },[]);

    const fetchUserData = async () => {
      try {
        const user = await AsyncStorage.getItem('token');
        if (user) {
          navigation.navigate('Tab')
        }
        else {
          navigation.navigate('Login')
        }
      } catch (e) {
        console.error(e);
      }
    };

  
  
  

  return (
    <SafeAreaView style={{ backgroundColor: '#252526', height: '100%' }}>
      <View style={{ backgroundColor: '#252526', height: '100%' }}>
        <View style={{ marginTop: moderateScaleVertical(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
          <ScrollView>
            <View style={{marginTop:moderateScaleVertical(320)}}>
              <View style={{alignItems:'center',justifyContent:'center',}}>
                <Text style={{fontSize:48,fontWeight:'400',color:'#EC8D86',fontFamily: "LobsterTwo-Italic"}}>Shubh</Text>
              </View>
            </View>
            <View style={{marginTop:moderateScaleVertical(60)}}>
              <ActivityIndicator color={'#d89590'} size={'large'}/>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>


  )
}

export default Splash

