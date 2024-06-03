import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
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
                <Text style={{color:'#EEEEEE',fontWeight:'400',fontSize:24,paddingTop:moderateScale(4), fontFamily: Fontfamily.regular}}>
                Let’s create your account
                </Text>
                
              </View>
            </View>
            {/* Email */}
            <View style={{marginTop:moderateScale(60)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400'}}>Email</Text>
              </View>
              <View style={{borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839',height:moderateScale(50),}}>
                <TextInput
                  placeholder='Enter Email'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12),fontWeight:'400'}}
                  />
              </View>
            </View>
            {/* Password */}
            <View style={{marginTop:moderateScale(40)}}>
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
            {/* Phone */}
            <View style={{marginTop:moderateScale(40)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400'}}>Phone Number</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter Phone Number'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12)}}
                  />
              </View>
            </View>
            
              {/* Sign Up button*/}
            <View style={{marginTop:moderateScale(40)}}>
              <TouchableOpacity>
                <View style={{borderWidth:1,height:moderateScale(43),alignItems:'center',marginTop:moderateScale(35),borderRadius:10,backgroundColor:'#E58179',borderColor:'#E58179'}}>
                  <Text style={{fontWeight:'600',fontSize:21,color:'#F7F7F7',paddingTop:moderateScale(7)}}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>  
            {/* Already Have account*/}
            <View  style={{flexDirection:'row',gap:8,justifyContent:'center',marginTop:moderateScale(40)}}>
              <View style={{marginTop:moderateScale(1)}}>
                <Text style={{fontWeight:'400',fontSize:16,color:'#AFAFAF'}}>Already have an account?</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                <Text style={{fontWeight:'500',fontSize:16,color:'#dc9d96',textDecorationLine:'underline'}} >Login</Text>
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