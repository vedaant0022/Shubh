import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Switch,  } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
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
                <Text style={{fontSize:18,color:'#f3f2f2',marginLeft:moderateScale(15)}}>Storage Utilization</Text>
              </View>
              {/* Image */}
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(25)}}>
                <Text style={{color:'#E2E2E2',fontSize:16,fontWeight:'600',fontFamily:Fontfamily.regular}}>Images</Text>
                <Text style={{color:'#E2E2E2',fontSize:16,fontWeight:'600',fontFamily:Fontfamily.regular}}>423/1000</Text>
            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(9)}}></View>
            {/* Slider */}
            <View>
                
            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(75)}}></View>
            {/* */}
            <View style={{marginTop:moderateScale(8),}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>Standard Uploads:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>180</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>Standard Deletes:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>49</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>High Resolution Uploads:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>243</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>High Resolution Deletes:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>18</Text>
                </View>
            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(9)}}></View>

            {/* Videos */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(30)}}>
                <Text style={{color:'#E2E2E2',fontSize:16,fontWeight:'600',fontFamily:Fontfamily.regular}}>Videos</Text>
                <Text style={{color:'#E2E2E2',fontSize:16,fontWeight:'600',fontFamily:Fontfamily.regular}}>21/100</Text>
            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(8)}}></View>
            {/* Slider */}
            <View>

            </View>
            <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(75)}}></View>
            <View style={{marginTop:moderateScale(8)}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>Standard Uploads:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>6</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>Standard Deletes:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>2</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>High Resolution Uploads:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>15</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:moderateScale(16)}}>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>High Resolution Deletes:</Text>
                    <Text style={{color:'#CBCBCB',fontSize:16,fontWeight:'400',fontFamily:Fontfamily.regular}}>0</Text>
                </View>
                <View style={{borderWidth:1,borderColor:'#333333',marginTop:moderateScale(15)}}></View>
            </View>
          </ScrollView>
          </View>
        </View>
        </SafeAreaView>
      
    
  )
}

export default Privacy