import { StatusBar } from 'expo-status-bar'; 
import  { useState, useRef } from "react"; 
import { Provider } from "react-redux";
import store from "./src/store/store";
import {
  View, 
  StyleSheet
} from "react-native";
import HomeChats from './src/HomeChats';
import SignIn from './src/Signin';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';  
const Stack = createStackNavigator();

export default function App()  {
   
return (  <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator  initialRouteName="SignIn">
        <Stack.Screen name="Home" component={HomeChats} /> 
        <Stack.Screen name="SignIn" component={SignIn} /> 
      </Stack.Navigator>
    </NavigationContainer>  
    </Provider>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }, 
});