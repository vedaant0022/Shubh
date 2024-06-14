import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, ViewBase, TextInput, Alert, ActivityIndicator } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {
  const navigation = useNavigation()

  const Component = props =>
    <View style={{
        width: scale(30),
        height: verticalScale(50),
        padding: moderateScale(5)
    }}/>;

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Validate email and phone

    function validateEmail(email) {
      const emailRegex = /.+@.+\..+/;
      return emailRegex.test(email);
    }
    function validatePhoneNumber(phoneNumber) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    }



    const handleRegister = async () => {
      

      if (!validateEmail(email)) {
        Alert.alert('Email is invalid');
        return;
      }
      if (!validatePhoneNumber(phone)) {
        Alert.alert('Invalid Mobile number')
        console.log('Phone number is invalid');
        return;
      }
      if (!email || !password) {
        Alert.alert('Error', 'Email and password are required.');
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch('https://shubh-backend.vercel.app/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, phone }),
        });
  
        const data = await response.json();
  
        if (response.status === 201) {
          Alert.alert('Success', "Login With Your Registered E-mail")
          navigate();
          
          
          
        } else if (response.status === 400 && data.error === 'Email already exists.') {
          Alert.alert('Error', 'This email is already registered.');
        } else {
          Alert.alert('Error', data.error);
        }
      } catch (error) {
        console.log(error)
        Alert.alert('Error', 'An error occurred while registering the user.');
      }
      finally {
        setIsLoading(false);

      }
    };
   
   const navigate = () => {
    navigation.navigate('Login')
   };
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
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400',fontFamily: Fontfamily.regular}}>Email</Text>
              </View>
              <View style={{borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839',height:moderateScale(50),}}>
                <TextInput
                  placeholder='Enter Email'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12),fontWeight:'400',color:'#AEAEAE',fontFamily: Fontfamily.regular}}
                  value={email}
                  onChangeText={setemail}
                  />
              </View>
            </View>
            {/* Password */}
            <View style={{marginTop:moderateScale(40)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400',fontFamily: Fontfamily.regular}}>Password</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter Password'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12),color:'#AEAEAE',fontFamily: Fontfamily.regular}}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={setpassword}
                  />
              </View>
            </View>
            {/* Phone */}
            <View style={{marginTop:moderateScale(40)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400',fontFamily: Fontfamily.regular}}>Phone Number</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter Phone Number'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12),color:'#AEAEAE',fontFamily: Fontfamily.regular}}
                  value={phone}
                  onChangeText={setphone}
                  keyboardType='number-pad'
                  />
              </View>
            </View>
            
              {/* Sign Up button*/}
            <View style={{marginTop:moderateScale(40)}}>
              <TouchableOpacity onPress={handleRegister}>
                <View style={{borderWidth:1,height:moderateScale(43),alignItems:'center',marginTop:moderateScale(35),borderRadius:10,backgroundColor:'#E58179',borderColor:'#E58179'}}>
                  {/* <Text style={{fontSize:21,color:'#F7F7F7',paddingTop:moderateScale(7),fontFamily: Fontfamily.regular,fontWeight:'400'}}>Sign Up</Text> */}
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#F7F7F7" style={{ paddingTop: moderateScale(5) }} />
                  ) : (
                    <Text style={{ fontWeight: '600', fontSize: 21, color: '#F7F7F7', paddingTop: moderateScale(5), fontFamily:Fontfamily.regular }}>Sign Up</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>  
            {/* Already Have account*/}
            <View  style={{flexDirection:'row',gap:8,justifyContent:'center',marginTop:moderateScale(40)}}>
              <View style={{marginTop:moderateScale(1)}}>
                <Text style={{fontWeight:'400',fontSize:16,color:'#AFAFAF',fontFamily: Fontfamily.regular}}>Already have an account?</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                <Text style={{fontWeight:'500',fontSize:16,color:'#dc9d96',textDecorationLine:'underline',fontFamily: Fontfamily.regular}} >Login</Text>
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