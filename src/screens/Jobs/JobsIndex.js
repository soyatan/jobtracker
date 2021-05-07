import React,{useEffect} from 'react'
import { View,Text, TouchableOpacity,FlatList } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';

import { addUserRequest, userLogoutRequest, userSelector } from '../../redux/userReducer';
import getstyles from './styles';

import { jobsSelector, fetchJobsRequest } from '../../redux/jobsReducer';


import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';
import { ActivityIndicator, Searchbar, useTheme } from 'react-native-paper';
import { useState } from 'react';
import AddJobModal from '../../components/AddJobModal/AddJobModal';
import AddJobButton from '../../components/AddJobButton/AddJobButton';
import JobPost from '../../components/JobPost/JobPost';
import { employeeSelector } from '../../redux/employeesReducer';
import { employeeFetchSelector } from '../../redux/employeesFetchReducer';



export default JobsIndex=()=>{

  const [searchQuery,setSearchQuery]=useState();

  const onChangeSearch=(value)=>{
    setSearchQuery(value)
  }
  const submitSearch=()=>{
    alert(searchQuery)
  }
  const curuser=useSelector(userSelector)
const employees=useSelector(employeeSelector);

const empfetchstatus=useSelector(employeeFetchSelector)
console.log('EMP',empfetchstatus)


console.log('employees', employees)
  const dispatch = useDispatch();
  const userEmail=curuser.email
  const styles=useThemedStyles(getstyles);
  useEffect(() => {
    dispatch(fetchJobsRequest())
  }, [])


  
  const jobs=useSelector(jobsSelector);
  
  const colors=useThemedColors();
  const [modalVisible, setModalVisible] = useState(false);

  const showAddModalandSendUser=()=>{

  dispatch(addUserRequest(userEmail))
    setModalVisible(true)
  }
 
  return(

    
    <View style={styles.container}>
      <View style={styles.searchbarcontainer}>
        <Searchbar
         placeholder="Search"
         onChangeText={onChangeSearch}
         value={searchQuery}
         onEndEditing={submitSearch}
         theme={{ colors: { underlineColor:'transparent',text:'white',placeholder:'white'}}}
         style={styles.searchbar}
         selectionColor={'white'}
         />        
      </View>

      <View style={styles.blogcontainer}>

         <AddJobModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
         {jobs?

         <FlatList 
          showsVerticalScrollIndicator={false}
            data={jobs}
            renderItem={item=>
              <JobPost data={item}/>
            }
          />
            :
        <ActivityIndicator size="large" color={colors[colorNames.header.inputText]}/>
            }
      </View>

      <View style={styles.addnewjobcontainer}>
          <AddJobButton onPress={()=>showAddModalandSendUser()}size={45} name={'plus'} color={colors[colorNames.header.inputText]}/>
          </View>
         
    </View>
  )
}