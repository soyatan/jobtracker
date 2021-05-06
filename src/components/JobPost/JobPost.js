import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';
import { employeeSelector } from '../../redux/employeesReducer';
import { useSelector } from 'react-redux';
import { companiesSelector } from '../../redux/companyReducer';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { deleteJobRequest } from '../../redux/jobsReducer';
import { useDispatch } from 'react-redux';


export default JobPost=({data})=>{
  const styles= useThemedStyles(getstyles)
  const job=data.item;
  const navigation = useNavigation();
  const[isDelete,setIsDelete]=useState(false)
  const users=useSelector(employeeSelector)
  const companies=useSelector(companiesSelector)
  const currentUser=users.find(item=>item.id===job.userId)
  const currentCompany=companies.find(item=>item.id===job.companyId)
  const colors=useThemedColors();
  const changeDeleteButton=()=>{
    if (isDelete){
      setIsDelete(false)
    }
    else setIsDelete(true)
  }
const dispatch = useDispatch();
const deleteJobRequestr=(id)=>{
  dispatch(deleteJobRequest(id))

}

  return(

 
        <View style={styles.blog}>
          
          <TouchableOpacity style={styles.blogleft}>
            <FontAwesome name='user-circle-o' size={20} style={styles.portraiticon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blogmiddle} onPress={()=>navigation.navigate('Job Details',{jobId:job.id})} onLongPress={()=>changeDeleteButton()}>
          {!currentCompany?  <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/> :
            <Text style={styles.blogtitletext} numberOfLines={1}>{currentCompany.name}</Text> }
            <Text style={styles.blogtitletext} >{job.title}</Text>
            
            {currentUser?
            <Text style={styles.jobtext}>{currentUser.username} on 9.34pm, 24/08/2011</Text> 
            :
            <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/>}

          </TouchableOpacity>
          {isDelete?
          <TouchableOpacity style={styles.blogleft} onPress={()=>deleteJobRequestr(job.id)}>
          <FontAwesome name='trash' size={24} style={styles.portraiticon}/>
        </TouchableOpacity>  : null

        }

        </View>

        

      
 
  )
}