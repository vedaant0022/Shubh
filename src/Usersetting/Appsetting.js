import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';

const App = () => {
    const navigation = useNavigation()

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4= () => setIsEnabled4(previousState => !previousState);
  
  return (
    <SafeAreaView style={{backgroundColor:'#242426',height:'100%'}}>
        <View style={{backgroundColor:'#242426',height:'100%'}}>
          <View style={{marginTop:moderateScaleVertical(30), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            {/* Header */}
            <View>
              <View style={{flexDirection:'row',}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
                style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScaleVertical(4)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15),fontWeight:'500',fontFamily:Fontfamily.regular}}>App Settings</Text>
              </View>
            </View>
            {/* Body */}
            <View style={{marginTop:moderateScaleVertical(30)}}>
              <Text style={{color:'#8a8c8f',fontSize:14}}>Disk Cache Usage: 0.2 MB</Text>
            </View>
            {/* Upload Resolution */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Upload in Higher Resolution</Text>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled1 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={{height:moderateScaleVertical(15),width:moderateScale(15)}}
              />
            </View>
            {/* Download */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400',}}>Download in Original Quality (if available)</Text>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled2 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
            {/* Dark Mode */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Dark Mode</Text>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled3 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </View>
            {/* Duplicate image */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Download Duplicate Images</Text>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled4 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch4}
                value={isEnabled4}
              />
            </View>
            {/* Clear cache */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Clear Ram Memory Cache</Text>
              <TouchableOpacity>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'}}
              style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#e27c7f'}}
              />
              </TouchableOpacity>
            </View>
            {/* Disk Cache */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Clear Disk Cache</Text>
              <TouchableOpacity>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'}}
              style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#e27c7f'}}
              />
              </TouchableOpacity>
            </View>
            {/* Local Data */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScaleVertical(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:16,fontWeight:'400'}}>Local Data</Text>
              <TouchableOpacity>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'}}
              style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#e27c7f'}}
              />
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default App