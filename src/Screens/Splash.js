import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useEffect, useState } from 'react';



const Splash = ({navigation}) => {

    useEffect(() =>{
        setTimeout(()=>{
            navigation.navigate('Signup');
        },2000);
    },[]);

  const Component = props =>
    <View style={{
      width: scale(30),
      height: verticalScale(50),
      padding: moderateScale(5)
    }} />;
    
  

  return (
    <SafeAreaView style={{ backgroundColor: '#252526', height: '100%' }}>
      <View style={{ backgroundColor: '#252526', height: '100%' }}>
        <View style={{ marginTop: moderateScale(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
          <ScrollView>
            <View style={{marginTop:moderateScale(320)}}>
              <View style={{alignItems:'center',justifyContent:'center',}}>
                <Text style={{fontSize:48,fontWeight:'400',color:'#EC8D86',fontFamily: "LobsterTwo-Italic"}}>Shubh</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>


  )
}

export default Splash

