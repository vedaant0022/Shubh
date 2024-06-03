import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';


const App = () => {
  const navigation = useNavigation()
  const Component = props =>
    <View style={{
        width: scale(30),
        height: verticalScale(50),
        padding: moderateScale(5)
    }}/>;
   
  return (
    <SafeAreaView style={{backgroundColor:'#252526',height:'100%'}}>
        <View style={{backgroundColor:'#252526',height:'100%'}}>
          <View style={{marginTop:moderateScale(30), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            {/* Header */}
            <View>
              <View style={{flexDirection:'row',gap:6,justifyContent:'center',marginTop:moderateScale(70)}}>
                <Text style={{color:'#AEAEAE',fontWeight:'500',fontSize:26,paddingTop:moderateScale(0)}}>
                  Login to
                </Text>
                <Text style={{color:'#d08c87',fontWeight:'400',fontSize:30,fontFamily: Fontfamily.bold}}>Shubh</Text>
              </View>
            </View>
            {/* Email */}
            <View style={{marginTop:moderateScale(60)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400'}}>Email</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter Email'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12)}}
                  />
              </View>
            </View>
            {/* Password */}
            <View style={{marginTop:moderateScale(20)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400'}}>Password</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter Password'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12)}}
                  />
              </View>
            </View>
            {/* Forgot Password */}
            <View style={{alignContent:'flex-end',alignItems:'flex-end'}}>
              <TouchableOpacity>
              <View style={{ marginTop:moderateScale(12)}}>
                <Text style={{color:'#d08c87',fontWeight:'400',fontSize:16,}} >Forgot Password?</Text>
              </View>
              </TouchableOpacity>
            </View>
            {/* Login Button */}
            <View>
              <TouchableOpacity onPress={()=>{navigation.navigate('OTP')}}>
                <View style={{borderWidth:1,height:moderateScale(43),alignItems:'center',marginTop:moderateScale(35),borderRadius:10,backgroundColor:'#E58179',borderColor:'#E58179'}}>
                  <Text style={{fontWeight:'600',fontSize:21,color:'#F7F7F7',paddingTop:moderateScale(5)}}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Or border */}
            <View style={{alignItems:'center',marginTop:moderateScale(30),borderWidth:1,borderColor:'#5d5c5c'}}>
          
            </View>
            {/* Google */}
            <View style={{marginTop:moderateScale(50)}}>
              <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{flexDirection:'row',gap:20,borderWidth:1,height:moderateScale(48),width:moderateScale(327),alignItems:'center',justifyContent:'center',borderRadius:10,borderColor:'#373839',backgroundColor:'#1F1F1F'}}>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/300/300221.png'}}
                  style={{height:moderateScale(24),width:moderateScale(24),marginTop:moderateScale(3)}}
                  />
                  <Text style={{fontSize:21,fontWeight:'400',color:'#F2F4F7',}}>Sign in with Google</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Already have account */}
            <View  style={{flexDirection:'row',gap:8,justifyContent:'center',marginTop:moderateScale(60)}}>
              <View style={{marginTop:moderateScale(1)}}>
                <Text style={{fontWeight:'400',fontSize:16,color:'#AFAFAF'}}>Don’t have an account?</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
                <Text style={{fontWeight:'500',fontSize:16,color:'#dc9d96',textDecorationLine:'underline'}} >Sign Up</Text>
                </TouchableOpacity>
              </View>
              
            </View>
           
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default App