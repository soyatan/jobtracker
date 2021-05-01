import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { userLogoutRequest, userSelector } from '../../redux/userReducer';
import { createStackNavigator } from '@react-navigation/stack';
import { create } from 'react-test-renderer';
import JobsIndex from './JobsIndex';
import { colorNames, ThemeModes, useDispatchChangeTheme, useTheme, useThemedColors } from '../../modules/Theming';

export default JobsMain=()=>{
  const colors=useThemedColors();  
  const Jobs=createStackNavigator();
        

  return(
    
    <Jobs.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#121212',
          borderBottomColor:'white',
          borderBottomWidth:2,
        },
        headerTitleStyle:{
          color:'white',
          alignSelf:'center',
        },
        headerShown:false,
      }}
    >
        <Jobs.Screen name="Jobs Index"  component={JobsIndex} />
        {/*<Blog.Screen name="BlogAdd"   />
        <Blog.Screen name="BlogDetail"   />
    <Blog.Screen name="BlogDelete" />*/}

    </Jobs.Navigator>

  )
}