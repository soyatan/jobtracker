import { View,Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colorNames, useThemedColors } from '../../modules/Theming'


export default HeaderLeftMake=()=>{
    const navigation=useNavigation();
    //const currentscreen=navigation.dangerouslyGetState();
    const colors=useThemedColors();
    //const currentscreenname=currentscreen.routes[0].name;
    const currentscreen=useRoute()
    
   
    const checkdetail=(currentscreen)=> {
   
        if (currentscreen.state !==undefined){
            if (currentscreen.state.routes.some(item=>item.name==='Job Details')){
                return true;
            }
        }
        else return false;
        }
    

        
    
  
    //const checkjobdetails=currentscreen.find('JOB APPLICATIONS')
    //console.log(checkjobdetails)
    //let currentscreenstate=currentscreen.state.routeNames;

    return(
        checkdetail(currentscreen) ?
      <TouchableOpacity onPress={()=>{
          navigation.goBack()
      }}><AntDesign
            name={'back'}
            size={30}
            style={{margin:5}}
            color={colors[colorNames.header.inputText]}
      /></TouchableOpacity>   : <View></View> 
     
    )
  
}

