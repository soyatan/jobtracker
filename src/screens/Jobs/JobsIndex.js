import React,{useEffect} from 'react'
import { View,Text, TouchableOpacity,FlatList } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { userLogoutRequest, userSelector } from '../../redux/userReducer';
import getstyles from './styles';

import { jobsSelector, fetchJobsRequest } from '../../redux/jobsReducer';
import BlogPost from '../../components/BlogPost';
import AddJobButton from '../../components/AddJobButton';
import { useThemedColors, useThemedStyles } from '../../modules/Theming';



export default JobsIndex=()=>{
  const styles=useThemedStyles(getstyles)
  useEffect(() => {
    dispatch(fetchJobsRequest())
  }, [])
  const dispatch = useDispatch();
  const loggedInUser=useSelector(userSelector);
  

  const jobs=useSelector(jobsSelector);
  console.log(jobs)

  const logoutrequest=()=>{
    console.log('loggingout');
    dispatch(userLogoutRequest())}
 
  return(

    
    <View style={styles.container}>
       <View style={styles.blogcontainer}>
      <FlatList 
      ListHeaderComponent={()=><Text>1231312</Text>}
      ListFooterComponent={()=><Text>1231312</Text>}
      data={jobs}
      renderItem={item=>
        <BlogPost data={item}/>
      }
      />
      </View>
      <AddJobButton name={'plus'} color={'white'}/>
      <AddJobButton onPress={()=>{logoutrequest()}} name={'sign-out'} color={'white'}/>
      
    </View>
  )
}