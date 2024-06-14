import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive'
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Fontfamily from '../../assets/Styles/Fontfamily'
import { useNavigation } from '@react-navigation/native'
import QRCode from 'react-native-qrcode-svg';

const Invite = ({ route }) => {
    const { group } = route.params;
    const navigation = useNavigation()
    const [value, setvalue] = useState(group._id);
    return (
        <View style={{ backgroundColor: '#242426', height: '100%' }}>
            <SafeAreaView>
                <View style={{ marginTop: moderateScaleVertical(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
                    {/* Header */}
                    <View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png' }}
                                    style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#f3f2f2', marginTop: moderateScaleVertical(1) }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, color: '#f3f2f2', marginLeft: moderateScale(15), fontWeight: '500', fontFamily: Fontfamily.regular }}>Invite People</Text>
                        </View>
                    </View>
                    <View style={{marginTop:moderateScaleVertical(95)}}>
                        <Text style={{ color: '#CBCBCB', fontFamily: Fontfamily.regular, fontSize: 21, fontWeight: '600' }}>Invite via QR Code</Text>
                    </View>

                    {/* QR Code */}
                    <View style={{ marginTop:moderateScaleVertical(25),alignItems:'center' }}>
                        <View style={{ marginTop: moderateScaleVertical(12), borderWidth: 8, width: moderateScale(190), borderColor: '#fff', alignItems:'center'}}>
                            <QRCode value={value} size={200} />
                            
                        </View>

                    </View>
                    {/* Button */}
                    <View>
                        <TouchableOpacity >
                            <View style={{ borderWidth: 1, height: moderateScaleVertical(43), alignItems: 'center', marginTop: moderateScaleVertical(35), borderRadius: 10, backgroundColor: '#E58179', borderColor: '#E58179' }}>
                                <Text style={{ fontWeight: '600', fontSize: 21, color: '#F7F7F7', paddingTop: moderateScaleVertical(5) }}>Share QR Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View>
                        <Text style={{color:'#AEAEAE'}}>{value}</Text>
                    </View> */}



                </View>
            </SafeAreaView>
        </View>
    )
}

export default Invite
