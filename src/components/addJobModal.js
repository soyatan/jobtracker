import React, { useState } from 'react'
import { View,Text,TouchableOpacity,FlatList, Modal,Pressable, ScrollView} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../modules/Theming';
import { employeeSelector } from '../redux/employeesReducer';
import { useSelector } from 'react-redux';
import { companiesSelector } from '../redux/companyReducer';
import { useNavigation } from '@react-navigation/native';
import MeetingInput from './MeetingInput';
import JobInput from './JobInput';

import DateInput from './DateInput';


export default AddJobModal=({modalVisible,setModalVisible,data})=>{
  
  const styles= useThemedStyles(getstyles)



 
  const navigation = useNavigation();
  
  const users=useSelector(employeeSelector)
  const companies=useSelector(companiesSelector)

  const colors=useThemedColors();
  
  return(

 
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
  >
    <View style={styles.centeredView}>
    
      
    
      
      <ScrollView style={styles.addjobcontainer}>

       <JobInput title={'Applied As:'} text={''}/>

       <JobInput title={'Job Title:'}text={''} />

       <JobInput title={'Company Name:'} text={''} />
       <JobInput title={'Location:'} text={''}/>
       <JobInput title={'Job Description:'} text={''} />
       <JobInput title={'Job Description:'}  text={''}/>
       <JobInput title={'Job Description:'} text={''}/>
       <JobInput title={'URL:'} text={''}/>
   
     
        
       <DateInput title={'Application Date:'}/>
   
       
 

      </ScrollView>
    
     
        
 
    
        <View style={styles.modalBottom}>
          
        <Pressable
          style={styles.modalbutton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.textStyle}>Save</Text>
        </Pressable>
        <Pressable
          style={styles.modalbutton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.textStyle}>Discard</Text>
        </Pressable>
        </View>
      </View>
      
    
  </Modal>
        

      
 
  )
}


