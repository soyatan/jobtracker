import React, { useState,useEffect } from 'react'
import { View,Text,TouchableOpacity,FlatList, Modal,Pressable, ScrollView} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';

import { useDispatch } from 'react-redux';
import { addJobRequest } from '../../redux/jobsReducer';

import Right from '../icons/right.svg'
import FilterItem from './FilterItem';

export default FilterSubChoices=({activeFilter,setMainFilter,filterValues,mainFilter,setActiveFilter})=>{

  //console.log(route.params)


 
  const styles= useThemedStyles(getstyles)
  const dispatch=useDispatch()
 



  return(

      <FlatList 
      data={filterValues}
      keyExtractor={(item,index)=>index}
      renderItem={(item)=>{
        return(

        <FilterItem item={item.item} setMainFilter={setMainFilter} mainFilter={mainFilter} activeFilter={activeFilter}/>
        )

      }}

      
      />



      

      
     
    

        

      
 
  )
}


