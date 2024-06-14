import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, ActivityIndicator, FlatList, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import User from '../../CustomComponent/User';
import Fontfamily from '../../assets/Styles/Fontfamily';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserGroupsByEmail } from '../../API/API';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';
import { moderateVerticalScale } from 'react-native-size-matters';

const App = () => {
  const navigation = useNavigation()
  const Component = props =>
    <View style={{
      width: scale(30),
      height: verticalScale(50),
      padding: moderateScale(5)
    }} />;

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setmodal] = useState(false)

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const email = await AsyncStorage.getItem('token');
        if (!email) {
          throw new Error('User email not found in storage');
        }
        const fetchedGroups = await getUserGroupsByEmail(email);
        setGroups(fetchedGroups);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();

  }, [groups]);

  if (loading) {
    return <ActivityIndicator size="large" color="#df9892" style={{ backgroundColor: '#242426', height: '100%' }} />;
  }

  if (error) {
    return <Text style={{ color: 'red', size: 16 }}>{error}</Text>;
  }

  // Modal
  const modalfn = () => {
    return (
      <Modal
        visible={modal}
        onRequestClose={() => { setmodal(!setmodal) }}
        transparent={true}
        animationType='fade'
      >
         <TouchableWithoutFeedback onPress={setmodal}>
        <View style={{ backgroundColor: '#292929', width: moderateScale(160), height: moderateVerticalScale(45), alignSelf: 'flex-end', borderRadius: 15, marginTop: moderateScaleVertical(65) }}>

          <View style={{ marginLeft: moderateScale(5), marginRight: moderateScale(5) }}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => { setmodal(false) }}>

              {/* Join a Group */}
              <View style={{ marginTop: moderateVerticalScale(12) }}>
                <TouchableOpacity
                  onPress={() => { navigation.navigate('Join') }}
                  style={{ flexDirection: 'row', gap: 15 }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3462/3462381.png' }}
                    style={{ height: moderateVerticalScale(20), width: moderateScale(20) }}
                    tintColor='#E2E2E2'
                  />
                  <Text style={{ color: '#E2E2E2', fontSize: 16 }}>Join a Group</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  };


  return (
    <View style={{ backgroundColor: '#242426', flex: 1 }}>
      <View style={{ position: 'absolute', bottom: 89, alignSelf: 'flex-end', }}>
        <View style={{ marginRight: moderateScale(15) }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => { navigation.navigate('Create') }}>
            <View style={{ backgroundColor: '#e98a89', height: moderateScaleVertical(50), width: moderateScale(50), borderRadius: 20 }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2997/2997933.png' }}
                style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: '#fff', marginTop: moderateScaleVertical(11), marginLeft: moderateScale(10) }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: moderateScaleVertical(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>

        <View>
          {/* Header  */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 200 }}>
              <View >
                <Text style={{ color: '#d89590', fontSize: 30, fontWeight: '400', fontFamily: Fontfamily.bold }}>Shubh</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: moderateScale(5) }}>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
                    style={{ tintColor: '#fff', height: moderateScale(25), width: moderateScale(25) }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2529/2529521.png' }}
                    style={{ tintColor: '#fff', height: moderateScale(25), width: moderateScale(25), marginHorizontal: moderateScale(15) }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { setmodal(true) }}

                >
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                    style={{ tintColor: '#fff', height: moderateScale(25), width: moderateScale(25) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Body */}
          {/* <View style={{alignItems:'center'}}>
            <Text style={{color:'#AEAEAE',fontWeight:'400',fontSize:18,fontFamily:Fontfamily.regular}}>
            Join or Create a Group to start sharing Your memorable movements!
            </Text>
            <Image
            source={require('./Home.png')}
            style={{height:moderateScale(220),width:moderateScale(220)}}
            />
          </View> */}
          {/* <FlatList
            data={groups}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ marginTop: moderateScale(25), flexDirection: 'row', }}>
                <ScrollView>
                  <TouchableOpacity onPress={() => {
                    navigation.push('Userdetail', { group: item });
                  }}>
                    <View style={{flexDirection:'row'}}>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' }}
                      style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: '#fff' }}
                    />
                    <Text style={{ marginTop: moderateScaleVertical(3), color: '#fff', fontSize: 19, fontWeight: 500, marginLeft: moderateScale(18), fontFamily: Fontfamily.regular }}>{item.Gname}</Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            )}
          /> */}
          
          {groups.length === 0 ? (
            <View style={{ alignItems: 'center', marginTop: moderateScaleVertical(20) }}>
              <Text style={{ color: '#AEAEAE', fontWeight: '400', fontSize: 18, fontFamily: Fontfamily.regular }}>
                Join or Create a Group to start sharing your memorable moments!
              </Text>
              <Image
                source={require('./Home.png')}
                style={{ height: moderateScale(220), width: moderateScale(220) }}
              />
            </View>
          ) : (
            <FlatList
              data={groups}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View style={{ marginTop: moderateScale(25), flexDirection: 'row' }}>
                  <ScrollView>
                    <TouchableOpacity onPress={() => { navigation.push('Userdetail', { group: item }); }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' }}
                          style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: '#fff' }}
                        />
                        <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500', marginLeft: moderateScale(18), fontFamily: Fontfamily.regular }}>{item.Gname}</Text>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              )}
            />
          )}
          
        
        </View>

        {/* Add Button */}

      </View>
      {modalfn()}
    </View>


  )
}

export default App

