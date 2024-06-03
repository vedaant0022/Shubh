import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const User = (props) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Userdetail')}}>
              <View style={{marginTop:moderateScale(25),flexDirection:'row',}}>
                  <Image
                  source={props.Img}
                  style={{height:moderateScale(30),width:moderateScale(30),tintColor:'#fff'}}
                  />
                  <Text style={{marginTop:moderateScale(3),color:'#fff',fontSize:19,fontWeight:500,marginLeft:moderateScale(18)}}>{props.name}</Text>
              </View>
            </TouchableOpacity>
    </View>
  )
}

export default User