import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch } from 'react-native'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Fontfamily from '../../assets/Styles/Fontfamily';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';


const Privacy = () => {
  const navigation = useNavigation()

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
          <View style={{marginTop:moderateScaleVertical(35), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            {/* Header */}
          <View>
              <View style={{flexDirection:'row',}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
                style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScaleVertical(1)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15),fontWeight:'500',fontFamily:Fontfamily.regular}}>Customer Insights</Text>
              </View>
            </View>
            {/* Image */}
            <View>
              <View style={{alignContent:'center',alignItems:'center',marginTop:moderateScaleVertical(150)}}>
                <Image
                source={require('./Images/Insights.png')}
                style={{height:moderateScaleVertical(290),width:moderateScale(200)}}
                />
              </View>
            </View>
            {/* Text */}
            <View>
              <View style={{marginTop:moderateScaleVertical(25)}}>
                <Text style={{color:'#f3f2f2',fontSize:18,textAlign:'center',justifyContent:'center',fontWeight:'500',fontFamily:Fontfamily.regular,lineHeight:20.48}}>You need to be a Group Admin to access Customer Insights</Text>
              </View>
            </View>
            
           
            
            
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default Privacy