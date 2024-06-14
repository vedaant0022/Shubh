import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScaleVertical } from '../assets/Styles/Responsive'

const User = (props) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Userdetail')}}>
              <View style={{marginTop:moderateScaleVertical(25),flexDirection:'row',}}>
                  <Image
                  source={props.Img}
                  style={{height:moderateScaleVertical(30),width:moderateScale(30),tintColor:'#fff'}}
                  />
                  <Text style={{marginTop:moderateScaleVertical(3),color:'#fff',fontSize:19,fontWeight:500,marginLeft:moderateScale(18)}}>{props.name}</Text>
              </View>
            </TouchableOpacity>
    </View>
  )
}

export default User