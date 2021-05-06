import { View,Text,Switch,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { colorNames, ThemeModes, useThemedColors, useTheme, useThemedStyles } from '../../modules/Theming';
import { Texts, useLocalization } from '../../modules/Localization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogoutRequest } from '../../redux/userReducer';
import { ThemeActions } from '../../redux/themeReducer';
import { LocalizationActions } from '../../redux/localizationReducer';
import Turkey from '../icons/turkey.svg'
import UK from '../icons/united-kingdom.svg'
import Day from '../icons/sun.svg'
import Night from '../icons/night.svg'
import getstyles from './styles';
import  {width as w,height as h} from '../../constants/Metrics'
export default HeaderRightMake=()=>{
  
  const theme=useTheme();
  const changeLocale = (key)=>{
    console.log(key)
    dispatch(LocalizationActions.changeLocale({locale: key}));
  }
  const changeThemeHere = (key)=>{
    dispatch(ThemeActions.changeTheme({themeMode: key}))
  }
  const styles= useThemedStyles(getstyles)
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
        style={{alignItems:'center',marginLeft:w*0.01,marginRight:w*0.01}}
        onPress={()=>changeLocale('tr')}>
        <UK height={styles.icondimensions.width} width={styles.icondimensions.height}/>  
      </TouchableOpacity>
    
    :
   
      <TouchableOpacity 
        style={{alignItems:'center', marginLeft:w*0.01,marginRight:w*0.01}}
        onPress={()=>changeLocale('en')}>
              
        <Turkey height={styles.icondimensions.width} width={styles.icondimensions.height}/>   
      </TouchableOpacity>
      }
    
  
  



      <View style={{alignItems:'center'}}>

     
      {theme===ThemeModes.light?
      <TouchableOpacity style={{marginLeft:w*0.01,marginRight:w*0.01}}
      onPress={()=>{changeThemeHere('dark')}}>
        <Day height={styles.icondimensions.width} width={styles.icondimensions.height}/>   
           </TouchableOpacity>
        :
        <TouchableOpacity style={{marginLeft:w*0.01,marginRight:w*0.01}}
        onPress={()=>{changeThemeHere('light')}}>
          <Night height={styles.icondimensions.width} width={styles.icondimensions.height}/>   
             </TouchableOpacity>

      }


      </View>
      
      <View style={{alignItems:'center',marginLeft:w*0.02,marginRight:w*0.03}}>
      <AddJobButton  size={w*0.07} onPress={()=>{logoutrequest()}} name={'sign-out'} color={colors[colorNames.header.inputText]}/>
      </View>
      </View>
    </>
  )
}
