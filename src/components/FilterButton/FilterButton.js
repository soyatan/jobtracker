import { View,Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming'
import Filter from '../icons/filter.svg'
import getstyles from './styles';

export default Filterbutton=()=>{
    const navigation=useNavigation();
    const styles= useThemedStyles(getstyles)
    //const currentscreen=navigation.dangerouslyGetState();
    const colors=useThemedColors();
    //const currentscreenname=currentscreen.routes[0].name;
    const currentscreen=useRoute()


    return(
        <Filter  height={styles.icondimensions.width} />  
    )
  
}

