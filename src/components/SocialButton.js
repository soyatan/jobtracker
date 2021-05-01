import React from 'react'
import { View,Text,TextInput, TouchableOpacity} from 'react-native'
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useThemedStyles } from '../modules/Theming'


export default SocialButton=({name})=>{
  const styles= useThemedStyles(getstyles)
  let color=null;
  let bgcolor=null;
  switch (name) {
    
    case 'facebook':
      color='white';
      bgcolor='#1877f2';
      break;
    case 'google':
      color='#4885ed';
      bgcolor='white';
      break;
    case 'linkedin':
      color='white';
      bgcolor='#0e76a8';
      break;
    case 'twitter':
      color='white';
      bgcolor='#00acee';
      break;
    default:
      break;
  }

  return(
     
        <TouchableOpacity style={[styles.socialbutton,{backgroundColor:bgcolor}]}>
          <FontAwesome
            name={name}
            size={25}
            color={color}
            />
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    
   
   
  )
}