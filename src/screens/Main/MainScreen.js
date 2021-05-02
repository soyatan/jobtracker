import React, { useEffect, useState } from 'react'
import { View,Text, Switch, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { searchSelector, setUser, userLogoutRequest, userSelector } from '../../redux/userReducer'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import AuthScreen from '../Auth/AuthScreen';

import { Header } from 'react-native/Libraries/NewAppScreen';
import JobsMain from '../Jobs/JobsMain';
import { colorNames, ThemeModes, useDispatchChangeTheme, useTheme, useThemedColors } from '../../modules/Theming';
import { ThemeActions } from '../../redux/themeReducer';
import { useDispatchChangeLocale, useLocalization } from '../../modules/Localization/LocalizationHooks';
import { changeLocale, LocalizationActions, LocalizationSelectors } from '../../redux/localizationReducer';
import { Texts } from '../../modules/Localization';
import AddJobButton from '../../components/AddJobButton';

//console.log(LocalizationSelectors)

const Main=createStackNavigator();

const MainScreen=()=>{
const loc=useLocalization();
useEffect(() => {
  if(theme=== ThemeModes.light){setdarkValue(false)}
  if(loc.locale==='tr'){setlocalValue('tr')};
 
 
}, [])
const logoutrequest=()=>{
    
  dispatch(userLogoutRequest())}

const currentLocale=loc.locale

const dispatch = useDispatch()
const theme=useTheme();
//console.log(theme)
const colors=useThemedColors();



const [darkvalue, setdarkValue] = useState(true);
const [localvalue, setlocalValue] = useState(true);

const changeLocale = (key)=>{
  console.log(key)
  dispatch(LocalizationActions.changeLocale({locale: key}));
}
const changeThemeHere = (key)=>{
  dispatch(ThemeActions.changeTheme({themeMode: key}))
  
}

console.log('localvalue',localvalue)


console.log('darkvalue',darkvalue)
const barStyle = theme === ThemeModes.light ? 'dark-content' : 'light-content';
//console.log(barStyle)
const headerRightMake=()=>{
  return(

    <View style={{alignItems:'center', flexDirection:'row'}}>
       <View style={{alignItems:'center'}}>
      {theme===ThemeModes.light?
    <Text style={{color:'black'}}>{currentLocale}</Text> : <Text style={{color:'white'}}>{currentLocale}</Text> }
    <Switch
        trackColor={{ false: "#121212", true: "#70EFDE" }}
        thumbColor={darkvalue ? "#70EFDE" : "#121212"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => {
          setlocalValue(value)
          {localvalue?
          changeLocale('tr') : changeLocale('en')   }      
        }}
        value={localvalue}
      />
      </View>
      <View style={{alignItems:'center'}}>
      {theme===ThemeModes.light?
    <Text style={{color:'black'}}>{loc.t(Texts.light)}</Text> : <Text style={{color:'white'}}>{loc.t(Texts.dark)}</Text> }
    <Switch
        trackColor={{ false: "#121212", true: "#70EFDE" }}
        thumbColor={darkvalue ? "#70EFDE" : "#121212"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => {
          setdarkValue(value);
          {darkvalue?
          changeThemeHere('light') : changeThemeHere('dark')   }      
        }}
        value={darkvalue}
      />
      </View>
      <View style={{alignItems:'center',marginLeft:5}}>
      <AddJobButton  size={36} onPress={()=>{logoutrequest()}} name={'sign-out'} color={colors[colorNames.header.inputText]}/>
      </View>
    </View>
  )
}

//console.log(colorNames)
const loggedInUser=useSelector(userSelector)
//console.log(loggedInUser)
const [initializing, setInitializing] = useState(true);
//const [user, setUser] = useState();

function onAuthStateChanged(user) {
  //console.log('usera birşeyler oluyor')
  //setUser(user);
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
            },
            headerRight: ()=>headerRightMake()
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
            },
            headerRight: ()=>headerRightMake()
          })}     
        >

          <Main.Screen name="JOB APPLICATIONS" component={JobsMain} options={{headerShown:true,headerTitle:loc.t(Texts.jobapplications) }} />
      </Main.Navigator>
  </NavigationContainer>
  </>
    )
      }
export default MainScreen;
