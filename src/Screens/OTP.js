import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import DigitsInput from 'react-native-digits-input';
import { useNavigation } from '@react-navigation/native'



const App = () => {
    const navigation = useNavigation()
  const Component = props =>
    <View style={{
      width: scale(30),
      height: verticalScale(50),
      padding: moderateScale(5)
    }} />;
    
  

  return (
    <SafeAreaView style={{ backgroundColor: '#252526', height: '100%' }}>
      <View style={{ backgroundColor: '#252526', height: '100%' }}>
        <View style={{ marginTop: moderateVerticalScale(20), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
          <ScrollView>
            <View>
              {/* Image */}
              <View style={{ alignItems: 'center', marginTop: moderateScale(120) }}>
                <Image
                  source={require('./Images/OTP.png')}
                  style={{ height: moderateScale(220), width: moderateScale(220), borderRadius: 8 }}
                />
              </View>
              {/* Header */}
              <View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 28, color: '#EEEEEE', letterSpacing: 2 }}>OTP Verification</Text>
                </View>
              </View>
              {/* 4 digit code */}
              <View>
                <View style={{ alignItems: 'center', marginTop: moderateScale(5) }}>
                  <Text style={{ fontWeight: '400', fontSize: 15, color: '#AFAFAF' }}>Enter 4 digit code sent on your mobile number</Text>
                </View>
              </View>
              {/* OTP Boxes */}
              <View style={{marginTop:moderateScale(30)}}>
                <View>
                <DigitsInput
                containerStyle={{}}
                numberContainerStyle={{height:moderateScale(50),width:moderateScale(69.5),borderColor:'#373839',backgroundColor:'#2C2C2C',borderRadius:8,borderWidth:1.5,}}
                numberOfDigits={4} onCodeChange={(text) => console.log(text)} />
                </View>
              </View>
              {/* Proceed Button */}
              <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Tab')}}>
                  <View style={{ borderWidth: 1, height: moderateScale(43), alignItems: 'center', marginTop: moderateScale(55), borderRadius: 10, backgroundColor: '#E58179', borderColor: '#E58179' }}>
                    <Text style={{ fontWeight: '600', fontSize: 21, color: '#F7F7F7', paddingTop: moderateScale(5) }}>Proceed</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Resend OTP*/}
              <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center', marginTop: moderateVerticalScale(60) }}>
                <View style={{ marginTop: moderateVerticalScale(1) }}>
                  <Text style={{ fontWeight: '400', fontSize: 16, color: '#AFAFAF' }}>Didn’t receive the it?</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#dc9d96', textDecorationLine: 'underline' }} >Resend</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>


  )
}

export default App

