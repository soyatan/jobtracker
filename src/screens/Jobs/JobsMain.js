import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import JobsIndex from './JobsIndex';

import JobDetails from './JobDetails';


export default JobsMain=()=>{
  
  const Jobs=createStackNavigator();
        

  return(
    
    <Jobs.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#121212',
          borderBottomColor:'white',
          borderBottomWidth:2,
        },
        headerTitleStyle:{
          color:'white',
          alignSelf:'center',
        },
        headerShown:false,
      }}
    >
        <Jobs.Screen name="Jobs Index"  component={JobsIndex}  />
        
        <Jobs.Screen 
        name="Job Details"  
        component={JobDetails}
        />

    </Jobs.Navigator>

  )
}