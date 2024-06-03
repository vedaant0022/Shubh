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
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15),fontWeight:'500',fontFamily:Fontfamily.regular}}>Customer Insights</Text>
              </View>
            </View>
            {/* Image */}
            <View>
              <View style={{alignContent:'center',alignItems:'center',marginTop:moderateScale(150)}}>
                <Image
                source={require('./Images/Insights.png')}
                style={{height:moderateScale(290),width:moderateScale(200)}}
                />
              </View>
            </View>
            {/* Text */}
            <View>
              <View style={{marginTop:moderateScale(25)}}>
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