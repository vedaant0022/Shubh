import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, TextInput, Alert, ActivityIndicator, PermissionsAndroid } from 'react-native'
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createGroup } from '../../API/API';
import { moderateScaleVertical } from '../../assets/Styles/Responsive';
import ImagePickerfrom, { launchImageLibrary } from 'react-native-image-picker';
import { openPhotoPicker } from 'react-native-permissions';



const Privacy = () => {
  const navigation = useNavigation()

  const Component = () =>
    <View style={{
      width: scale(30),
      height: verticalScale(50),
      padding: moderateScale(5)
    }} />;


  const [groupName, setGroupName] = useState('');
  const [loading, setLoading] = useState(false);
  const [photo, setphoto] = useState('');

  const handleCreateGroup = async () => {
    setLoading(true);
    try {
      const createdBy = await AsyncStorage.getItem('token');
      if (!createdBy) {
        throw new Error('User email not found in storage');
      }

      const groupData = {
        Gname: groupName,
        createdBy,
        // photo,
      };

      const newGroup = await createGroup(groupData);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Enter Valid Group name');
    } finally {
      setLoading(false);
    }
  };

  // const picker = async() => {
  //   const result = await launchImageLibrary(openPhotoPicker)
  //   setphoto(result.assets[0].uri);
  // };
  const picker = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo', // Specify media type
        includeBase64: false, // Whether to include the base64 data of the image
        maxHeight: 200, // Max height of the image
        maxWidth: 200, // Max width of the image
      });

      if (!result.didCancel) {
        setphoto(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick an image');
      console.error('Image picker error:', error);
    }
  };







  return (
    <SafeAreaView style={{ backgroundColor: '#242426', height: '100%' }}>
      <View style={{ backgroundColor: '#242426', height: '100%' }}>
        <View style={{ marginTop: moderateScale(35), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
          <ScrollView>
            {/* Header */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png' }}
                    style={{ height: moderateScale(20), width: moderateScale(20), tintColor: '#f3f2f2', marginTop: moderateScale(4) }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 28, color: '#EC8D86', marginLeft: moderateScale(15), fontFamily: Fontfamily.bold, letterSpacing: 2 }}>Create Group</Text>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                    style={{ tintColor: '#fff', height: moderateScale(24), width: moderateScale(24) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Body */}
            {/* Text */}
            <View>
              <View style={{ marginTop: moderateScale(25) }}>
                <Text style={{ fontSize: 19, fontWeight: '400', color: '#AFAFAF', fontFamily: Fontfamily.regular }}>Create a new group & add relatives to start sharing your lovely photos!</Text>
              </View>
            </View>
            {/* Logo */}
            <View style={{ marginTop: moderateScale(50), alignItems: 'center' }}>
              {photo ? (
                <Image source={{ uri: photo }} style={{ width: 200, height: 200, borderRadius: 100 }} />
              ) : (
                <TouchableOpacity onPress={picker}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7010/7010068.png' }}
                    style={{ height: moderateScale(180), width: moderateScale(180), tintColor: '#EC8D86' }}
                  />
                </TouchableOpacity>
              )}
              {!photo && <Text style={{ fontWeight: '400', fontSize: 19, color: '#AFAFAF', marginTop: moderateScale(10) }}>Add a cool group photo</Text>}
            </View>
            {/* Enter name */}
            <View style={{ marginTop: moderateScale(20) }}>
              <View>
                <Text style={{ fontSize: 16, color: '#aaabaa', fontWeight: '400' }}>Name</Text>
              </View>
              <View style={{ height: moderateScale(50), borderWidth: 1, borderRadius: 10, marginTop: moderateScale(8), backgroundColor: '#2C2C2C', borderColor: '#373839' }}>
                <TextInput
                  placeholder='Enter group name'
                  value={groupName}
                  onChangeText={setGroupName}
                  placeholderTextColor={'#c6c6c7'}
                  style={{ fontSize: 16, paddingLeft: moderateScale(12), color: '#AEAEAE' }}
                />
              </View>
            </View>
            {/*Done Button*/}
            <View>
              <TouchableOpacity onPress={handleCreateGroup} disabled={loading}>
                <View style={{ borderWidth: 1, height: moderateScale(43), alignItems: 'center', marginTop: moderateScale(35), borderRadius: 10, backgroundColor: '#E58179', borderColor: '#E58179' }}>
                  {/* <Text style={{fontWeight:'600',fontSize:21,color:'#F7F7F7',paddingTop:moderateScale(5)}}>Done</Text> */}
                  {loading ? (
                    <ActivityIndicator size="large" color="#F7F7F7" style={{ paddingTop: moderateScaleVertical(4) }} />
                  ) : (
                    <Text style={{ fontWeight: '600', fontSize: 21, color: '#F7F7F7', paddingTop: moderateScale(5) }}>Done</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>








          </ScrollView>
        </View>
      </View>
    </SafeAreaView>


  )
}

export default Privacy