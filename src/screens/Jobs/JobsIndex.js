import React,{useEffect} from 'react'
import { View,Text, TouchableOpacity,FlatList } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { userLogoutRequest, userSelector } from '../../redux/userReducer';
import getstyles from './styles';

import { jobsSelector, fetchJobsRequest } from '../../redux/jobsReducer';
import BlogPost from '../../components/BlogPost';
import AddJobButton from '../../components/AddJobButton';
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';
import { ActivityIndicator } from 'react-native-paper';



export default JobsIndex=()=>{
  const styles=useThemedStyles(getstyles);
  useEffect(() => {
    dispatch(fetchJobsRequest())
  }, [])
  const dispatch = useDispatch();
  const loggedInUser=useSelector(userSelector);
  const jobs=useSelector(jobsSelector);
  //console.log(jobs)
  const colors=useThemedColors();
 
 
  return(

    
    <View style={styles.container}>
       <View style={styles.blogcontainer}>
         {jobs?
          <FlatList 
          //ListHeaderComponent={()=><Text>1231312</Text>}
          //ListFooterComponent={()=><Text>1231312</Text>}
            data={jobs}
            renderItem={item=>
              <BlogPost data={item}/>
            }
          />
            :
             <>
            <Text>Wait please</Text> 
            <ActivityIndicator size="large" color={colors[colorNames.header.inputText]}/>
            </>
            }
          </View>
          <AddJobButton size={45} name={'plus'} color={colors[colorNames.header.inputText]}/>
          
    </View>
  )
}