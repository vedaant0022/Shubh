import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch } from 'react-native'

import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
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
                style={{height:moderateScale(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScaleVertical(4)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15),fontWeight:'500'}}>Watermark</Text>
              </View>
            </View>
            {/* Text */}
            <View>
              <View style={{marginTop:moderateScaleVertical(45)}}>
                <Text style={{color:'#f3f2f2',fontSize:18,fontWeight:'400',fontFamily:Fontfamily.regular}}>Add a Watermark, or logo of your brand, on all the images you upload.</Text>
              </View>
            </View>
            {/* Image */}
            <View style={{marginRight:moderateScale(100)}}>
              <Image
              source={require('./Images/Watermark.png')}
              style={{height:moderateScaleVertical(390),width:moderateScale(300)}}
              />
            </View>
            {/* Button */}
            
              <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{borderWidth:1,width:moderateScale(320),height:moderateScaleVertical(50),backgroundColor:'#df6f86',borderColor:'#df6f86',borderRadius:10}}>
                  <Text style={{textAlign:'center',color:'#f3f2f2',fontSize:18,paddingTop:moderateScaleVertical(10),fontWeight:'500'}}>Upload from Gallery</Text>
                </View>
              </TouchableOpacity>
            
      
            
            
           
            
            
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default Privacy