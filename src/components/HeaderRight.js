import { View,Text,Switch} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { colorNames, ThemeModes, useThemedColors, useTheme } from '../modules/Theming';
import { Texts, useLocalization } from '../modules/Localization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogoutRequest } from '../redux/userReducer';
import { ThemeActions } from '../redux/themeReducer';
import { LocalizationActions } from '../redux/localizationReducer';


export default HeaderRightMake=()=>{
  const [localvalue, setlocalValue] = useState(true);
  const theme=useTheme();
  const changeLocale = (key)=>{
    console.log(key)
    dispatch(LocalizationActions.changeLocale({locale: key}));
  }
  const changeThemeHere = (key)=>{
    dispatch(ThemeActions.changeTheme({themeMode: key}))
  }
  const colors=useThemedColors();
  const [darkvalue, setdarkValue] = useState(true);

  const loc=useLocalization();
  const currentLocale=loc.locale

  useEffect(() => {
    if(theme=== ThemeModes.light){setdarkValue(false)}
    if(loc.locale==='tr'){setlocalValue('tr')};
   
  }, [])

  const logoutrequest=()=>{
    dispatch(userLogoutRequest())}
  
  const dispatch = useDispatch()

  return(

    <View style={{alignItems:'center', flexDirection:'row'}}>
       <View style={{alignItems:'center'}}>
      {theme===ThemeModes.light?
    <Text style={{color:'black'}}>{currentLocale}</Text> : <Text style={{color:'white'}}>{currentLocale}</Text> }
    <Switch
        trackColor={{ false: "gray", true: "gray" }}
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
        trackColor={{ false: "gray", true: "gray" }}
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
      <View style={{alignItems:'center',marginLeft:5,marginTop:10}}>
      <AddJobButton  size={32} onPress={()=>{logoutrequest()}} name={'sign-out'} color={colors[colorNames.header.inputText]}/>
      </View>
    </View>
  )
}
  