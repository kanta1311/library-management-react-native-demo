import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import BookDetailScreen from './src/pages/BookDetail';
import ActionBarImage from './src/component/ActionBarImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
export default function App() {

  const isLogin=true;
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        
      <Stack.Screen name="Login" component={LoginScreen} options={{headerBackVisible:false}}/>
      
      <Stack.Screen name="Home" component={HomeScreen} options={(props) => ({ headerBackVisible:false, headerRight:()=>(
          <TouchableOpacity onPress={()=>{
            
            console.log(props.navigation);
            // AsyncStorage.getItem("isLoggedin").then(data=>{
            //   alert("storage Data : "+data)
            // })
            AsyncStorage.clear().then(()=>{
              props.navigation.replace('Login')
            })
          }}>
            <ActionBarImage></ActionBarImage>
          </TouchableOpacity>
        ) })}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
