import React, { useEffect, useState } from 'react'
import {  StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { userSelector } from '../../redux/userReducer'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import AuthScreen from '../Auth/AuthScreen';


import JobsMain from '../Jobs/JobsMain';
import { colorNames, ThemeModes, useDispatchChangeTheme, useTheme, useThemedColors } from '../../modules/Theming';

import { useLocalization } from '../../modules/Localization/LocalizationHooks';
import { Texts } from '../../modules/Localization';
import HeaderLeftMake from '../../components/HeaderLeft/HeaderLeft';
import HeaderRightMake from '../../components/HeaderRight/HeaderRight';


//console.log(LocalizationSelectors)

const Main=createStackNavigator();

const MainScreen=()=>{
  const loc=useLocalization();
 

  const theme=useTheme();

  const colors=useThemedColors();


  const barStyle = theme === ThemeModes.light ? 'dark-content' : 'light-content';

  const loggedInUser=useSelector(userSelector)

  const [initializing, setInitializing] = useState(true);


  function onAuthStateChanged(user) {

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    
    
    return subscriber; // unsubscribe on unmount
  }, []);



  if (initializing) return null;

  //console.log('maindeki user',user)

  if (!loggedInUser) {

  return(
    <>
  <StatusBar barStyle={barStyle} backgroundColor={colors[colorNames.status.statusbarbackground]}/>
  <NavigationContainer>
  <Main.Navigator
            screenOptions={()=>({
              headerStyle:{
                backgroundColor:colors[colorNames.header.background],
                borderBottomColor:colors[colorNames.header.inputBorder],
                borderBottomWidth:2,
                
              },
              headerTitleStyle:{
                color:colors[colorNames.header.inputText],
                alignSelf:'center',
                paddingRight:15,
              },
              headerRight: ()=>HeaderRightMake()
            })}     
          >
          <Main.Screen name="Auth"
                      component={AuthScreen}
                      options={{headerTitle:loc.t(Texts.signinhead)}} />

      </Main.Navigator>
  </NavigationContainer>
  </>
    )
  }
  else return(
    <>
  <StatusBar barStyle={barStyle} backgroundColor={colors[colorNames.status.statusbarbackground]}/>
    <NavigationContainer>
        <Main.Navigator
            screenOptions={(route)=>({
              headerStyle:{
                backgroundColor:colors[colorNames.header.background],
                borderBottomColor:colors[colorNames.header.inputBorder],
                borderBottomWidth:2,
                
                
              },
              headerTitleStyle:{
                color:colors[colorNames.header.inputText],
                alignSelf:'center',
                paddingRight:25,
                fontSize:18,
                
                
              },
              headerRight: ()=>HeaderRightMake()
            })}     
          >

            <Main.Screen 
            name="JOB APPLICATIONS"
            component={JobsMain} 
            options={(route)=>({
              headerShown:true,
              headerTitle:loc.t(Texts.jobapplications),
              headerLeft:()=>HeaderLeftMake()
            })} 
            
            />
        </Main.Navigator>
    </NavigationContainer>
    </>
      )
        }
export default MainScreen;
