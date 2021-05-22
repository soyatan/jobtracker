import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import JobsIndex from './JobsIndex';

import JobDetails from './JobDetails';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterModal from '../../components/FilterModal/FilterModal';

import getstyles from './styles';
import { useThemedStyles } from '../../modules/Theming';

export default JobsMain=()=>{
  const styles=useThemedStyles(getstyles);  
  const Jobs=createDrawerNavigator();
        

  return(
    
    <Jobs.Navigator
      drawerPosition={'right'}
      drawerStyle={styles.drawer}
      drawerContent={()=><FilterModal/>}
      screenOptions={{  headerShown:false }}
    >
         
        <Jobs.Screen name="Jobs Index"  component={JobsIndex}  />
        
        
        <Jobs.Screen 
        name="Job Details"  
        component={JobDetails}
        options={{unmountOnBlur:true}}
        />
         

    </Jobs.Navigator>

  )
}