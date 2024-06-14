import { View, Text, Button, TouchableOpacity, Alert, Linking, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive'
import { SafeAreaView } from 'react-native-safe-area-context'
import QRCodeScanner from 'react-native-qrcode-scanner'

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Join = () => {
    const navigation = useNavigation()
    const [scanning, setScanning] = useState(false);
    const [cameraPermission, setCameraPermission] = useState(false);
    const [email, setEmail] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    

    useEffect(() => {
        const checkCameraPermission = async () => {
          let permission;
          if (Platform.OS === 'android') {
            permission = PERMISSIONS.ANDROID.CAMERA;
          } else {
            permission = PERMISSIONS.IOS.CAMERA;
          }
    
          const result = await check(permission);
          if (result === RESULTS.GRANTED) {
            setCameraPermission(true);
          } else {
            const requestResult = await request(permission);
            setCameraPermission(requestResult === RESULTS.GRANTED);
          }
        };
        const fetchEmail = async () => {
            const storedEmail = await AsyncStorage.getItem('token');
            
            if (storedEmail) {
              setEmail(storedEmail);
            } else {
              // Handle case where email is not found
              Alert.alert('Error', 'User email not found in storage');
            }
          };
          fetchEmail();
        checkCameraPermission();
      }, []); 

      if (!cameraPermission) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Request Camera Permission" onPress={() => setScanning(true)} />
          </View>
        );
      }


      const onSuccess = async (e) => {
        const scannedValue = e.data;
        setQrValue(scannedValue); // Store the scanned value
    
        setLoading(true);
        setResponseMessage('');
        try {
          const email = await AsyncStorage.getItem('token');
          if (!email) {
            throw new Error('No email found in AsyncStorage');
          }
    
          const response = await fetch('https://shubh-backend.vercel.app/join', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              _id: scannedValue,
              members: email,
            }),
          });
    
          if (response.ok) {
            const updatedGroup = await response.json();
            setResponseMessage('Successfully joined the group');
            navigation.navigate('Tab');
            setQrValue('');
          } else {
            const errorData = await response.json();
            if (errorData.error === 'Email already exists in the group') {
              Alert.alert('Failed to join the group', 'Email already exists in the group');
            } else {
              Alert.alert('Failed to join the group', errorData.error || 'An error occurred');
            }
            setResponseMessage(errorData.error || 'Failed to join the group');
          }
        } catch (error) {
          console.error(error);
          setResponseMessage('Failed to join the group');
          Alert.alert('Failed to join the group', error.message);
        } finally {
          setLoading(false);
          setQrValue('');
        }
      };
    

      const handleScan = async () => {
        setLoading(true);
        setResponseMessage('');
        try {
          const email = await AsyncStorage.getItem('token');
          if (!email) {
            throw new Error('No email found in AsyncStorage');
          }
    
          const response = await fetch('https://shubh-backend.vercel.app/join', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              _id: qrValue,
              members: email,
            }),
          });
    
          if (response.ok) {
            const updatedGroup = await response.json();
            // Alert.alert('Successfully joined the group');
            navigation.navigate('Tab')
            setQrValue('');
          } else {
            const errorData = await response.json();
            console.log(errorData)
            Alert.alert('Failed to join the group');
          }
        } catch (error) {
          console.error(error);
          Alert.alert('Failed to join the group');
        } finally {
          setLoading(false);
          setQrValue('');
          
        }
      };

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#242426', height: '100%' }}>
                <View style={{ marginLeft: moderateScale(5), marginRight: moderateScaleVertical(5),flex:1 }}>
                 {loading && (
                  <View style={{ position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,}}>
                      <ActivityIndicator size="large" color="#F7F7F7" />
                  </View>
              )}
                
                    <QRCodeScanner
                        onRead={onSuccess}
                        topContent={<></>}
                        bottomContent={<>
                        </>}
                        // showMarker={true}
                        containerStyle={{ height:'100%'}}
                    />
                </View>


            </View>
        </SafeAreaView>
    )
}

export default Join