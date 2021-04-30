import React, { useEffect, useState } from 'react'
import { View,Text, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { searchSelector, setUser, userSelector } from '../../redux/userReducer'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import AuthScreen from '../Auth/AuthScreen';

import { Header } from 'react-native/Libraries/NewAppScreen';
import JobsMain from '../Jobs/JobsMain';
import { colorNames, ThemeModes, useTheme, useThemedColors } from '../../modules/Theming';


const Main=createStackNavigator();

const MainScreen=()=>{
const theme=useTheme();
const colors=useThemedColors();
const barStyle = theme === ThemeModes.light ? 'light-content' : 'dark-content';
console.log(colorNames)

const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

function onAuthStateChanged(user) {
  setUser(user);
  if (initializing) setInitializing(false);
}

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  
  return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

//console.log('maindeki user',user)

if (!user) {

return(
  <>
<StatusBar barStyle={barStyle} backgroundColor={colors[colorNames.header.background]}/>
<NavigationContainer>
    <Main.Navigator
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
      }}
    >
        <Main.Screen name="Auth"
                     component={AuthScreen}
                     options={{headerTitle:'Sign-In'}} />

    </Main.Navigator>
</NavigationContainer>
</>
  )
}

return(
  <>
<StatusBar barStyle={barStyle} backgroundColor={colors[colorNames.header.background]}/>
  <NavigationContainer>
      <Main.Navigator
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
        }}
      >

          <Main.Screen name="Jobs" component={JobsMain} options={{headerShown:false}} />
      </Main.Navigator>
  </NavigationContainer>
  </>
    )
      }
export default MainScreen;
