import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch, TextInput } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
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
        <View style={{backgroundColor:'#242426',height:'100%'}}>
          <View style={{marginTop:moderateScale(35), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            {/* Header */}
          <View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
                style={{height:moderateScale(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScale(4)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:28,color:'#EC8D86',marginLeft:moderateScale(15),fontFamily:Fontfamily.bold,letterSpacing:2}}>Create Group</Text>
               <TouchableOpacity>
                    <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'}}
                    style={{tintColor:'#fff',height:moderateScale(24),width:moderateScale(24)}}
                    />
                </TouchableOpacity>
              </View>
            </View>
            {/* Body */}
            {/* Text */}
            <View>
                <View style={{marginTop:moderateScale(25)}}>
                    <Text style={{fontSize:19,fontWeight:'400',color:'#AFAFAF'}}>Create a new group & add relatives to start sharing your lovely photos!</Text>
                </View>
            </View>
            {/* Logo */}
            <View style={{marginTop:moderateScale(50)}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                    <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/7010/7010068.png'}}
                    style={{height:moderateScale(180),width:moderateScale(180),tintColor:'#EC8D86'}}
                    />
                    </TouchableOpacity>
                    <Text style={{fontWeight:'400',fontSize:19,color:'#AFAFAF'}}>Add a cool group photo</Text>
                </View>
            </View>
            {/* Enter name */}
            <View style={{marginTop:moderateScale(20)}}>
              <View>
                <Text style={{fontSize:16,color:'#aaabaa',fontWeight:'400'}}>Name</Text>
              </View>
              <View style={{height:moderateScale(50),borderWidth:1,borderRadius:10,marginTop:moderateScale(8),backgroundColor:'#2C2C2C',borderColor:'#373839'}}>
                <TextInput
                  placeholder='Enter group name'
                  placeholderTextColor={'#c6c6c7'}
                  style={{fontSize:16,paddingLeft:moderateScale(12)}}
                  />
              </View>
            </View>
             {/*Done Button*/}
             <View>
              <TouchableOpacity onPress={()=>{navigation.navigate('Tab')}}>
                <View style={{borderWidth:1,height:moderateScale(43),alignItems:'center',marginTop:moderateScale(35),borderRadius:10,backgroundColor:'#E58179',borderColor:'#E58179'}}>
                  <Text style={{fontWeight:'600',fontSize:21,color:'#F7F7F7',paddingTop:moderateScale(5)}}>Done</Text>
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