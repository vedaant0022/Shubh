import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, TextInputComponent } from 'react-native'
import React from 'react'
import Fontfamily from '../../assets/Styles/Fontfamily';
import { moderateScale, moderateScaleVertical } from '../../assets/Styles/Responsive';

const App = () => {

  return (
    <View style={{ backgroundColor: '#242426', height: '100%' }}>
      <View style={{ marginTop: moderateScaleVertical(30), marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
        <ScrollView>
          <View>
            {/* Header  */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 180 }}>
                <View >
                  <Text style={{ color: '#d89590', fontSize: 30, fontWeight: '400', fontFamily: Fontfamily.bold }}>Shubh</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: moderateScaleVertical(5) }}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25) }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2529/2529521.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25), marginHorizontal: moderateScale(15) }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
                      style={{ tintColor: '#fff', height: moderateScaleVertical(25), width: moderateScale(25) }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>



            {/* Horizontal Bar */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Your Photos */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 10, marginTop: moderateScaleVertical(30), borderRadius: 15 }}>
                <TouchableOpacity>
                  <View style={{ borderWidth: 1, width: moderateScale(110), height: moderateScaleVertical(34), borderRadius: 4, alignItems: 'center', backgroundColor: '#473739', borderColor: '#945865' }}>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#AFAFAF', paddingTop: moderateScaleVertical(5) }}>Your Photos</Text>
                  </View>
                </TouchableOpacity>
                {/* Saved */}
                <TouchableOpacity>
                  <View style={{ borderWidth: 1, width: moderateScale(110), height: moderateScaleVertical(34), borderRadius: 4, alignItems: 'center', backgroundColor: '#473739', borderColor: '#945865' }}>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#AFAFAF', paddingTop: moderateScale(5) }}>Saved</Text>
                  </View>
                </TouchableOpacity>
                {/* Downloads */}
                <TouchableOpacity>
                  <View style={{ borderWidth: 1, width: moderateScale(120), height: moderateScaleVertical(34), borderRadius: 4, alignItems: 'center', backgroundColor: '#473739', borderColor: '#945865' }}>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#AFAFAF', paddingTop: moderateScaleVertical(5) }}>Your Photos</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </ScrollView>







          </View>

        </ScrollView>
      </View>
    </View>


  )
}

export default App