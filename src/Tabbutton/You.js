import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';


const You = () => {
  const [email, setemail] = useState('');
  const navigation = useNavigation()
  // const Stack = createNativeStackNavigator();
  useEffect(() => {
    // Function to fetch email from AsyncStorage
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('token');
        if (storedEmail) {
          setemail(storedEmail);
        } else {

          setemail('Email not found');
        }
      } catch (error) {
        console.error('Error fetching email from AsyncStorage:', error);

      }
    };
    fetchEmail();
  }, []);

  const logout = async () => {
      navigation.navigate('Login');
  };


  return (
    <View>
      <StatusBar hidden />
      <View style={{ backgroundColor: '#242426', height: '100%' }}>
        <View style={{ marginTop: moderateScale(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
          <ScrollView>
            {/* Header */}

            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 180 }}>
                <View >
                  <Text style={{ color: '#d89590', fontSize: 30, fontWeight: '400', fontFamily: Fontfamily.bold }}>Shubh</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: moderateScaleVertical(5) }}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25) }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2529/2529521.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25), marginHorizontal: moderateScale(15) }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25) }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Profile Image */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(25) }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' }}
                  style={{ height: moderateScaleVertical(50), width: moderateScale(50), justifyContent: 'space-between' }}
                />
                <View style={{ marginLeft: moderateScale(10) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 18, fontWeight: '500', fontFamily: Fontfamily.regular }}>{email}</Text>
                  <Text style={{ color: '#f3f2f2', fontSize: 14, fontWeight: '400', fontFamily: Fontfamily.regular }}>+91 9017328456</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png' }}
                    style={{ height: moderateScaleVertical(26), width: moderateScale(26), tintColor: '#f3f2f2', marginRight: moderateScale(10), marginTop: moderateScaleVertical(8) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Storage utilization */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(25) }}>
                <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '500', fontFamily: Fontfamily.regular }}>Storage Utilization</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Storage') }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#f3f2f2' }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ borderWidth: 0.5, borderColor: '#2e2f31', marginTop: moderateScaleVertical(10) }}></View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(12) }}>
                <Text style={{ color: '#9b9d9d', fontSize: 14, fontFamily: Fontfamily.regular }}>Images: 412/1000</Text>
                <Text style={{ color: '#9b9d9d', fontSize: 14 }}>Videos: 21/1000</Text>
              </View>
            </View>
            {/* Options */}
            <View style={{ marginTop: moderateScaleVertical(5) }}>
              {/* Insights */}
              <TouchableOpacity onPress={() => { navigation.navigate('Insights') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Customer Insights</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(15), width: moderateScale(15), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* Watermark */}
              <TouchableOpacity onPress={() => { navigation.navigate('Watermark') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Watermark</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(15), width: moderateScale(15), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* Design Settings */}
              <TouchableOpacity onPress={() => { navigation.navigate('DesignSettings') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Design Settings</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(15), width: moderateScale(15), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* App settings */}
              <TouchableOpacity onPress={() => { navigation.navigate('Appsetting') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>App Settings</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(15), width: moderateScale(15), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* Privacy and security */}
              <TouchableOpacity onPress={() => { navigation.navigate('Privacy') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Privacy & Security</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(15), width: moderateScale(15), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* Help and Support */}
              <TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Help and Support</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>
              {/* Logout */}
              <TouchableOpacity onPress={logout}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScaleVertical(24), marginBottom: moderateScale(15) }}>
                  <Text style={{ color: '#f3f2f2', fontSize: 20, fontWeight: '400', fontFamily: Fontfamily.regular }}>Logout</Text>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271226.png' }}
                    style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(10) }}
                  />
                </View>
              </TouchableOpacity>

            </View>


          </ScrollView>

        </View>
      </View>
    </View>
  )
}

export default You