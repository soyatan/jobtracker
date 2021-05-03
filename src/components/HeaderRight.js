import { View,Text,Switch,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { colorNames, ThemeModes, useThemedColors, useTheme } from '../modules/Theming';
import { Texts, useLocalization } from '../modules/Localization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogoutRequest } from '../redux/userReducer';
import { ThemeActions } from '../redux/themeReducer';
import { LocalizationActions } from '../redux/localizationReducer';
import Turkey from './turkey.svg'
import UK from './united-kingdom.svg'
import Day from './sun.svg'
import Night from './night.svg'

export default HeaderRightMake=()=>{
  
  const theme=useTheme();
  const changeLocale = (key)=>{
    console.log(key)
    dispatch(LocalizationActions.changeLocale({locale: key}));
  }
  const changeThemeHere = (key)=>{
    dispatch(ThemeActions.changeTheme({themeMode: key}))
  }
  const colors=useThemedColors();
  

  const loc=useLocalization();
  const currentLocale=loc.locale

  useEffect(() => {
   
   
   
  }, [])

  const logoutrequest=()=>{
    dispatch(userLogoutRequest())}
  
  const dispatch = useDispatch()

  return(
<>
    <View style={{alignItems:'center', flexDirection:'row'}}>
      {currentLocale==='en'?
       <TouchableOpacity 
        style={{alignItems:'center'}}
        onPress={()=>changeLocale('tr')}>
        <UK height={35} width={45}/>  
      </TouchableOpacity>
    
    :
   
      <TouchableOpacity 
        style={{alignItems:'center'}}
        onPress={()=>changeLocale('en')}>
              
        <Turkey height={40} width={45}/>  
      </TouchableOpacity>
      }
    
  
  



      <View style={{alignItems:'center'}}>

     
      {theme===ThemeModes.light?
      <TouchableOpacity
      onPress={()=>{changeThemeHere('dark')}}>
        <Day width={30}/>
           </TouchableOpacity>
        :
        <TouchableOpacity
        onPress={()=>{changeThemeHere('light')}}>
          <Night width={35}/>
             </TouchableOpacity>

      }


      </View>
      
      <View style={{alignItems:'center',marginLeft:10,marginRight:10}}>
      <AddJobButton  size={32} onPress={()=>{logoutrequest()}} name={'sign-out'} color={colors[colorNames.header.inputText]}/>
      </View>
      </View>
    </>
  )
}
