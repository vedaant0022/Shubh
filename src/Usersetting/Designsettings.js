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
                style={{height:moderateScaleVertical(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScaleVertical(4)}}
                />
                </TouchableOpacity>
                <Text style={{fontSize:21,color:'#f3f2f2',marginLeft:moderateScale(15)}}>Design Settings</Text>
              </View>
            </View>
            {/* Body */}
            <View>
              {/* Color Mode */}
              <TouchableOpacity style={{marginTop:moderateScaleVertical(35)}}>
                <View>
                  <Text style={{fontSize:16, fontWeight:'400',color:'#F7F7F7',fontFamily:Fontfamily.regular}}>Color Mode</Text>
                  <Text style={{fontSize:14, fontWeight:'400',color:'#AFAFAF',fontFamily:Fontfamily.regular}}>Choose between 2 color modes for background of gallery. Default will be Dark</Text>
                </View>
              </TouchableOpacity>
              {/* Photo size */}
              <TouchableOpacity style={{marginTop:moderateScaleVertical(25)}}>
                <View>
                  <Text style={{fontSize:16, fontWeight:'400',color:'#F7F7F7',fontFamily:Fontfamily.regular}}>Photo Size</Text>
                  <Text style={{fontSize:14, fontWeight:'400',color:'#AFAFAF',fontFamily:Fontfamily.regular}}>Choose either large or small photo sizes</Text>
                </View>
              </TouchableOpacity>
              {/* Font Style */}
              <TouchableOpacity style={{marginTop:moderateScaleVertical(25)}}>
                <View>
                  <Text style={{fontSize:16, fontWeight:'400',color:'#F7F7F7',fontFamily:Fontfamily.regular}}>Font Style</Text>
                  <Text style={{fontSize:14, fontWeight:'400',color:'#AFAFAF',fontFamily:Fontfamily.regular}}>Choose among serif & sans font</Text>
                </View>
              </TouchableOpacity>
              {/* Grid Structure */}
              <TouchableOpacity style={{marginTop:moderateScaleVertical(25)}}>
                <View>
                  <Text style={{fontSize:16, fontWeight:'400',color:'#F7F7F7',fontFamily:Fontfamily.regular}}>Grid Structure</Text>
                  <Text style={{fontSize:14, fontWeight:'400',color:'#AFAFAF',fontFamily:Fontfamily.regular}}>Choose between different grid structures for your photo gallery</Text>
                </View>
              </TouchableOpacity>
            </View>
           
            {/* Alert  */}
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScaleVertical(20),}}></View>
            <View style={{marginTop:moderateScaleVertical(20),gap:8}}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828975.png'}}
                style={{width:moderateScale(22),height:moderateScaleVertical(22),tintColor:'#fff'}}
                />
                <Text style={{color:'#EEEEEE',fontSize:14,fontWeight:'500',letterSpacing:1}}>
                  Coming Up in Future! Currently Unavailable
                </Text>
              </View>
            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScaleVertical(20)}}></View>
           
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default Privacy