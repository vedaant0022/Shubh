import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import User from '../../CustomComponent/User';
import Fontfamily from '../../assets/Styles/Fontfamily';

const App = () => {
  const navigation = useNavigation()
  const Component = props =>
    <View style={{
        width: scale(30),
        height: verticalScale(50),
        padding: moderateScale(5)
    }}/>;
  return (
        <View style={{backgroundColor:'#242426',height:'100%'}}>
          <View style={{marginTop:moderateScale(30), marginLeft:moderateScale(15),marginRight:moderateScale(15)}}>
          <ScrollView>
            <View>
              {/* Header  */}
              <View>
                <View style={{flexDirection:'row',}}>
                <View >
                  <Text style={{color:'#d89590',fontSize:30,fontWeight:'400',fontFamily: Fontfamily.bold}}>Shubh</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:moderateScale(5),marginRight:moderateScale(15)}}>
                  <TouchableOpacity>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/54/54481.png'}}
                  style={{tintColor:'#fff',height:moderateScale(25),width:moderateScale(25)}}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/2529/2529521.png'}}
                  style={{tintColor:'#fff',height:moderateScale(25),width:moderateScale(25),marginHorizontal:moderateScale(15)}}
                  />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'}}
                  style={{tintColor:'#fff',height:moderateScale(25),width:moderateScale(25)}}
                  />
                  </TouchableOpacity>
                </View>
                </View>
              </View>
            {/* Body */}
            {/* Siddhart and myra Reception */}
            <User name='Siddhart & Myra Reception' Img={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}/>
            {/* Siddhart and myra Mehendi */}
            <User name='Siddhart & Myra Mehendi' Img={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}/>
            {/* Siddhart and Myra Haldi */}
            <User name='Siddhart & Myra Haldi' Img={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}/>
            {/* Jiya and Sourabh wedding */}
            <User name='Jiya & Sourabh Wedding' Img={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}/>
            {/* Jiya and Sourabh Sangeet */}
            <User name='Jiya & Sourabh Sangeet' Img={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}/>
            {/* Add Button */}
            <View>
              <TouchableOpacity 
              style={{alignItems:'flex-end',marginTop:moderateVerticalScale(270)}}
              onPress={()=>{navigation.navigate('Create')}}>
                <View style={{backgroundColor:'#e98a89',height:moderateScale(50),width:moderateScale(50),borderRadius:20}}>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/2997/2997933.png'}}
                  style={{height:moderateScale(30),width:moderateScale(30),tintColor:'#fff',marginTop:moderateScale(11),marginLeft:moderateScale(10)}}
                  />
                </View>
              </TouchableOpacity>
            </View>


            </View>

          </ScrollView>
          </View>
        </View>
      
    
  )
}

export default App