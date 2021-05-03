



import { View,Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useThemedStyles } from '../modules/Theming';
import getstyles from './styles'  


export default JobInput=({title,text})=>{
useEffect(() => {
    setValue(text)
   
}, [])

 const[isEditing,setEditing]=useState(false);
 const[value,setValue]=useState();
 
 const styles=useThemedStyles(getstyles);

    return(
        <View style={styles.jobinputcontainer}> 
        <Text style={styles.jobtitletext}>{title}</Text>
        {isEditing?
        
        <TextInput
        style={styles.jobtext}
        value={value.toString()}
        onChangeText={(value)=>setValue(value)}
        onBlur={()=>setEditing(false)}/>
        :
        <Text style={styles.jobtext} onPress={()=>setEditing(true)}>{value}</Text> }

        </View>
     
    )
  
}

