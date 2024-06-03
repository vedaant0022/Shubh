import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import User from '../../CustomComponent/User';

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
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                style={{flexDirection:'row',gap:12}}
                onPress={()=>{navigation.goBack()}}>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
                style={{height:moderateScale(20),width:moderateScale(20),tintColor:'#f3f2f2',marginTop:moderateScale(4)}}
                />
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}}
                style={{height:moderateScale(25),width:moderateScale(25),tintColor:'#fff',marginTop:moderateScale(1)}}
                />
                <Text style={{marginTop:moderateScale(3),color:'#fff',fontSize:19,fontWeight:500}}>Siddhart & Myra Reception</Text>
                </TouchableOpacity>
                
               <TouchableOpacity>
                    <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'}}
                    style={{tintColor:'#fff',height:moderateScale(24),width:moderateScale(24)}}
                    />
                </TouchableOpacity>
              </View>
            </View>
            {/* Image */}
            <View>
                <View style={{alignItems:'center',marginTop:moderateScale(190)}}>
                    <Image
                    source={require('./Images/Wedding.png')}
                    style={{height:moderateScale(250),width:moderateScale(250)}}
                    />
                     <Text style={{fontSize:18,color:'#AFAFAF',marginTop:moderateScale(25),fontWeight:'600'}}>Start Uploading Photographs</Text>
                </View>
                
            </View>
            {/* Button */}
            <View style={{marginTop:moderateScale(100),alignItems:'flex-end',marginRight:moderateScale(10),}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Tab')}}>
                <View style={{backgroundColor:'#e98a89',height:moderateScale(50),width:moderateScale(50),borderRadius:20}}>
                  <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/3097/3097412.png'}}
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