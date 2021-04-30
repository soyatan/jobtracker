import React from 'react'
import { View,Text,TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default AddJobButton=({name,color})=>{
  return(
     
    <TouchableOpacity style={styles.addbutton}>
      
      <FontAwesome
            name={name}
            size={45}
            color={color}
            />
    </TouchableOpacity>
    
   
   
  )
}