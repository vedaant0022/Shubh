import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import User from '../../CustomComponent/User';
import { height, moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';
import { moderateVerticalScale } from 'react-native-size-matters';
import Fontfamily from '../../assets/Styles/Fontfamily';


const App = ({ route }) => {
  

  const { group } = route.params;
  const [modal, setmodal] = useState(false)
  const modalfn = () => {
    return (
      <Modal
        visible={modal}
        onRequestClose={() => { setmodal(!setmodal) }}
        transparent={true}
        animationType='fade'
      >
        <View style={{backgroundColor:'#292929',width:moderateScale(160),height:moderateVerticalScale(138),alignSelf:'flex-end',borderRadius:15}}>
          <View style={{marginLeft:moderateScale(5),marginRight:moderateScale(5)}}> 
            {/* Setting */}
            <View style={{marginTop:moderateVerticalScale(12)}}>
              <TouchableOpacity style={{flexDirection:'row',gap:15}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/2040/2040504.png'}}
                style={{height:moderateVerticalScale(20),width:moderateScale(20)}}
                tintColor='#E2E2E2'
                />
                <Text style={{color:'#E2E2E2',fontSize:16}}>Settings</Text>
              </TouchableOpacity>
            </View>
            {/* Invite people */}
            <View style={{marginTop:moderateVerticalScale(12)}}>
              <TouchableOpacity 
              onPress={()=>{navigation.push('Invite', {group: group} )}}
              style={{flexDirection:'row',gap:15}}
              >
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1011/1011407.png'}}
                style={{height:moderateVerticalScale(20),width:moderateScale(20)}}
                tintColor='#E2E2E2'
                />
                <Text style={{color:'#E2E2E2',fontSize:16}}>Invite People</Text>
              </TouchableOpacity>
            </View>
            {/* Mute group */}
            <View style={{marginTop:moderateVerticalScale(12)}}>
              <TouchableOpacity style={{flexDirection:'row',gap:15}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1159/1159704.png'}}
                style={{height:moderateVerticalScale(20),width:moderateScale(20)}}
                tintColor='#E2E2E2'
                />
                <Text style={{color:'#E2E2E2',fontSize:16}}>Mute Group</Text>
              </TouchableOpacity>
            </View>
            {/* Leave Group */}
            <View style={{marginTop:moderateVerticalScale(12)}}>
              <TouchableOpacity style={{flexDirection:'row',gap:15}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828975.png'}}
                style={{height:moderateScale(18),width:moderateScale(18)}}
                tintColor='#f97066'
                />
                <Text style={{color:'#f97066',fontSize:16}}>Leave Group</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    )
  };


  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: '#242426', flex:1 }}>
      <View style={{ position: 'absolute', bottom:89,alignSelf:'flex-end' }}>
        <View style={{marginRight:moderateScale(15)}}>
              <TouchableOpacity onPress={() => { navigation.navigate('Tab') }}>
                <View style={{ backgroundColor: '#e98a89', height: moderateScaleVertical(50), width: moderateScale(50), borderRadius: 20 }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3097/3097412.png' }}
                    style={{ height: moderateScaleVertical(30), width: moderateScale(30), tintColor: '#fff', marginTop: moderateScaleVertical(11), marginLeft: moderateScale(10) }}
                  />
                </View>
              </TouchableOpacity>
              </View>
            </View>
      <View style={{ marginTop: moderateScaleVertical(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
        <ScrollView>
          <View>
            {/* Header  */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row', gap: 12 }}
                  onPress={() => { navigation.goBack() }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png' }}
                    style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(4) }}
                  />
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' }}
                    style={{ height: moderateScaleVertical(25), width: moderateScale(25), tintColor: '#fff', marginTop: moderateScaleVertical(1) }}
                  />
                  <Text style={{  color: '#fff', fontSize: 19 ,fontFamily:Fontfamily.regular,fontWeight:'500'}}>{group.Gname}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => { setmodal(true) }}
                >
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                    style={{ tintColor: '#fff', height: moderateScaleVertical(24), width: moderateScale(24) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Image */}
            <View>
              <View style={{ alignItems: 'center', marginTop: moderateScaleVertical(190) }}>
                <Image
                  source={require('./Images/Wedding.png')}
                  style={{ height: moderateScaleVertical(250), width: moderateScale(250) }}

                />
                <Text style={{ fontSize: 18, color: '#AFAFAF', marginTop: moderateScaleVertical(25), fontWeight: '600' }}>Start Uploading Photographs</Text>
              </View>

            </View>
            {/* Button */}
            
          </View>

        </ScrollView>
      </View>
      {modalfn()}
    </View>


  )
}


export default App