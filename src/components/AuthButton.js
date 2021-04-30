import React from 'react'
import { View,Text,TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

export default AuthButton=({label,onPress})=>{
  return(
     
        <TouchableOpacity  style={label==='SIGN UP'? styles.button2 : styles.button} onPress={onPress}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    
   
   
  )
}