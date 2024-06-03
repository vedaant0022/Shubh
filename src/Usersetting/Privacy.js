import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';


const Privacy = () => {
  const navigation = useNavigation()

  const Component=()  =>
    <View style={{
        width: scale(30),
        height: verticalScale(50),
        padding: moderateScale(5)
    }}/>;
    // Sliders
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    // Checkbox
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    
  
  return (
    <SafeAreaView style={{backgroundColor:'#242426',height:'100%'}}>
        <View style={{backgroundColor:'#252526',height:'100%'}}>
          <View style={{marginTop:moderateScale(35), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            {/* Header */}
          <View>
              <View style={{flexDirection:'row',}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
                style={{height:moderateScale(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScale(1)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15),fontWeight:'500',fontFamily:Fontfamily.regular}}>Privacy & Security</Text>
              </View>
            </View>
            {/* Change Name and icon */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(35)}}>
              <Text style={{color:'#8a8c8f',fontSize:17,fontWeight:'500',fontFamily:Fontfamily.regular}}>Anyone can change name & icon</Text>
              <Switch
                
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled1 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
            
            {/* Link can join */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(25)}}>
              <Text style={{color:'#8a8c8f',fontSize:17,fontWeight:'500',fontFamily:Fontfamily.regular}}>Anyone wiht link can join</Text>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled2 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
            {/* Anonymous Login */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(25)}}>
              <View>
              <Text style={{color:'#8a8c8f',fontSize:17,fontWeight:'500',fontFamily:Fontfamily.regular}}>Anonymous Login</Text>
              <Text style={{color:'#8a8c8f',fontSize:15,fontWeight:'400',fontFamily:Fontfamily.regular}}>User can join group and see pictures</Text>
              <Text style={{color:'#8a8c8f',fontSize:15,fontWeight:'400',fontFamily:Fontfamily.regular}}>without login</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#e37d7b'}}
                thumbColor={isEnabled3 ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </View>
            {/* Upload Permission */}
            <View style={{marginTop:moderateScale(30)}}>
              <Text style={{fontSize:16,fontWeight:'500',color:'#fff'}}>Upload Permssions</Text>
            </View>
            {/* All participants can upload */}
            <View style={{marginTop:moderateScale(10),flexDirection:'row',gap:10}}>
             <Checkbox style={{margin:4,}} color="#e49091" value={isChecked1} onValueChange={setChecked1} />
             <Text style={{color:'#E2E2E2',fontSize:16,paddingTop:moderateScale(3),fontWeight:'400'}}>All participants can upload</Text>
            </View>
            {/* Only selected participants */}
            <View style={{marginTop:moderateScale(10),flexDirection:'row',gap: 10}}>
             <Checkbox style={{margin:4}} color="#e49091" value={isChecked2} onValueChange={setChecked2} />
             <Text style={{color:'#E2E2E2',fontSize:16,paddingTop:moderateScale(3),fontWeight:'400'}}>Only selected participants can upload</Text>
            </View>
            
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default Privacy