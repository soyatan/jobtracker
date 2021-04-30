import React,{useEffect} from 'react'
import { View,Text, TouchableOpacity,FlatList } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { userLogoutRequest, userSelector } from '../../redux/userReducer';
import styles from './styles';

import { jobsSelector, fetchJobsRequest } from '../../redux/jobsReducer';
import BlogPost from '../../components/BlogPost';
import AddJobButton from '../../components/AddJobButton';


export default JobsIndex=()=>{
  useEffect(() => {
    dispatch(fetchJobsRequest())
  }, [])
  const dispatch = useDispatch();
  const loggedInUser=useSelector(userSelector);
  

  const jobs=useSelector(jobsSelector);
  console.log(jobs)


 
  return(

    
    <View style={styles.container}>
       <View style={styles.blogcontainer}>
      <FlatList 
      data={jobs}
      renderItem={item=>
        <BlogPost data={item}/>
      }
      />
      </View>
      <AddJobButton name={'plus'} color={'white'}/>
      
    </View>
  )
}