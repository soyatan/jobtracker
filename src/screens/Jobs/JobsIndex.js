import React,{useEffect,useCallback} from 'react'
import { View,Text, TouchableOpacity,FlatList,Linking,Alert, Button} from 'react-native'

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
  const [data, setData] = useState(jobs)

  const onChangeSearch=(value)=>{
    setSearchQuery(value)
    if(!value){setData(jobs)}
  }
  const submitSearch=()=>{
    if(searchQuery) {
    const newList=jobs.filter(item=>{
      const ITEMTITLE=item.title? 
                  item.title.toUpperCase() 
                  : ''.toUpperCase();
      const SEARCHDATA=searchQuery.toUpperCase();
      return ITEMTITLE.indexOf(SEARCHDATA)>-1;
     });
     setData(newList)
    }
    else {
      setData(jobs)


    }
  }
    
  

  const clearSearch=()=>{
    alert(searchQuery)
  }


const curuser=useSelector(userSelector)
const employees=useSelector(employeeSelector);


const empfetchstatus=useSelector(employeeFetchSelector)
//console.log('EMP',empfetchstatus)

const jobs=useSelector(jobsSelector);
//console.log('employees', employees)
  const dispatch = useDispatch();
  const userEmail=curuser.email
  
  const styles=useThemedStyles(getstyles);
  useEffect(() => {
    dispatch(fetchJobsRequest())
  }, [])
  useEffect(() => {
    setData(jobs)
  }, [jobs])



  
  
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
         keyExtractor={(item,index)=>index}
          showsVerticalScrollIndicator={false}
            data={data}
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