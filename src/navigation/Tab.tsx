import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Tabbutton/Home';
import Album from '../Tabbutton/Album';
import You from '../Tabbutton/You';


const Tab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#df9892',
        tabBarInactiveTintColor:'grey',tabBarShowLabel:false,
        tabBarLabelPosition:'below-icon',
        tabBarHideOnKeyboard:true,
        
        tabBarStyle:{position:'absolute',
                    bottom:0.1,
                    borderRadius:4,
                    elevation:10,
                    height:'8%',
                    backgroundColor:'#242426',
                    borderBlockColor:'#242426'
                    
                }
    }}
    >
    <Tab.Screen name="Home" component={Home}options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'}}
              style={{height:25,width:25,tintColor: focused ? '#df9892':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#df9892':'grey'}}>Home</Text>
            </View>
          )
        }} />
    <Tab.Screen name="Album" component={Album} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/9684/9684415.png'}}
              style={{height:25,width:25,tintColor: focused ? '#df9892':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#df9892':'grey'}}>Album</Text>
            </View>
          )
        }} />
    <Tab.Screen name="You" component={You} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'}}
              style={{height:25,width:25,tintColor: focused ? '#df9892':'grey'}}
              />
              <Text style={{fontWeight:'400',color: focused ? '#df9892':'grey'}}>You</Text>
            </View>
          )
        }} />
  </Tab.Navigator>
  )
}

export default Tab