import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './src/navigation/Tab'
import Privacy from './src/Usersetting/Privacy'
import Appsetting from './src/Usersetting/Appsetting';
import Insights from './src/Usersetting/Insights';
import Watermark from './src/Usersetting/Watermark';
import Designsettings from './src/Usersetting/Designsettings';
import Storage from './src/Usersetting/Storage';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import OTP from './src/Screens/OTP';
import Create from './src/Home/Create';
import Userdetail from './src/Home/Userdetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName='Splash'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="Splash" component={Splash}  options={{animation:'ios'}}/>
      <Stack.Screen name="Login" component={Login}  options={{animation:'ios'}}/>
      <Stack.Screen name="Signup" component={SignUp}  options={{animation:'ios'}}/>
      <Stack.Screen name="OTP" component={OTP}  options={{animation:'slide_from_bottom'}}/>
      <Stack.Screen name="Tab" component={Tab}  options={{animation:'slide_from_bottom'}}/>
      <Stack.Screen name="Privacy" component={Privacy}  options={{animation:'ios'}}/>
      <Stack.Screen name="Appsetting" component={Appsetting}   options={{animation:'ios'}}/>
      <Stack.Screen name="Insights" component={Insights}  options={{animation:'ios'}} />
      <Stack.Screen name="Watermark" component={Watermark}  options={{animation:'ios'}}/>
      <Stack.Screen name="DesignSettings" component={Designsettings} options={{animation:'ios'}} />
      <Stack.Screen name="Storage" component={Storage}  options={{animation:'ios'}} />
      {/* Home Tab */}
      <Stack.Screen name="Create" component={Create}  options={{animation:'slide_from_bottom'}} />
      <Stack.Screen name="Userdetail" component={Userdetail}  options={{animation:'slide_from_right'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}