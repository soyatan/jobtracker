import React from 'react'
import { View,Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import { colorNames, useThemedColors, useThemedStyles } from '../modules/Theming';
import getstyles from './styles'




export default AuthInput=({label,secureTextEntry,onChangeText,labelValue,keyboardType})=>{

  
  const colors=useThemedColors();
  const styles= useThemedStyles(getstyles)
  return(

 <View style={styles.textinputcontainer}>
   <TextInput
 label={label}
 mode='outlined'
 style={styles.textinput}
 placeholderTextColor='white'
 selectionColor={colors[colorNames.auth.selectionColor]}
 theme={{ colors: {underlineColor:'transparent',text:'#BB86FC',disabled:'white',placeholder:'#BB86FC'}}}
 onChangeText={onChangeText}
 labelValue={labelValue}
 secureTextEntry={secureTextEntry}
 keyboardType={keyboardType}

 
 
 
 
/></View>
  )
}