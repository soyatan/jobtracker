import React, { useState,useEffect } from 'react'
import { View,Text,TouchableOpacity,FlatList, Modal,Pressable, ScrollView} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { addJobRequest } from '../../redux/jobsReducer';

import Right from '../icons/right.svg'

export default FilterSubText=({title,state,isChoosing,activeState,dbKey,data})=>{

  
 
  const styles= useThemedStyles(getstyles)
  const dispatch=useDispatch()
  
/*
  if (data){
  const filterValues=data.map(item=>{
      return (item[dbKey].toUpperCase())})


const filterAndSortedValues= _.sortedUniq(filterValues);

console.log(filterAndSortedValues)
*/
 
const _onPress = () =>{
    state(data);
    activeState(dbKey);
    isChoosing(true);
}

  

  return(

 

        <TouchableOpacity onPress={()=>_onPress()} style={styles.filtermodalbody}>
            <Text style={styles.header}>{title}</Text>
            <Right width={styles.icondimensions.width} height={styles.icondimensions.height}/>
            

        </TouchableOpacity>
     
    

        

      
 
  )
}


