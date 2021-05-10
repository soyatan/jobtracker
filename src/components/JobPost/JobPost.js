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
import moment from "moment";



export default JobPost=({data})=>{
  const styles= useThemedStyles(getstyles)
  
  const navigation = useNavigation();
  const[isDelete,setIsDelete]=useState(false)


  const companies=useSelector(companiesSelector)

  
  const users=useSelector(employeeSelector)
  
  const currentUser=users.find(item=>item.id===data.item.userId)
  const currentCompany=companies.find(item=>item.id===data.item.companyId)
  const colors=useThemedColors();
  const changeDeleteButton=()=>{
    if (isDelete){
      setIsDelete(false)
    }
    else setIsDelete(true)
  }
const dispatch = useDispatch();
const deleteJobRequestr=(id)=>{
  dispatch(deleteJobRequest(id));
  setIsDelete(false)

}



const formdate=(date)=>{return moment(date).format("DD-MM-YYYY")}
//console.log(job.appdate)

  return(

 
        <View style={styles.blog}>
          
          <TouchableOpacity style={styles.blogleft}>
            <FontAwesome name='user-circle-o' size={20} style={styles.portraiticon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blogmiddle} onPress={()=>navigation.navigate('Job Details',{jobId:data.item.id,companyname:currentCompany,currentUser:currentUser})} onLongPress={()=>changeDeleteButton()}>
          {!currentCompany?  <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/> :
            <Text style={styles.blogtitletext} numberOfLines={1}>{currentCompany.name}</Text> }
            <Text style={styles.blogtitletext} >{data.item.title}</Text>
            
            {currentUser&&data.item?
            <Text style={styles.jobtext}>{currentUser.username} on {formdate(data.item.appdate)}</Text> 
            :
            <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/>}

          </TouchableOpacity>
          {isDelete&&data.item?
          <TouchableOpacity style={styles.blogleft} onPress={()=>deleteJobRequestr(data.item.id)}>
          <FontAwesome name='trash' size={24} style={styles.portraiticon}/>
        </TouchableOpacity>  : null

        }

        </View>

        

      
 
  )
}