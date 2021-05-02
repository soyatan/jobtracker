import React, { useState } from 'react'
import { View,Text,FlatList, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming'
import { jobsSelector } from '../../redux/jobsReducer'
import getstyles from './styles'

export default JobDetails =({route})=>{
const{jobId}=route.params
const jobs=useSelector(jobsSelector);
const job=jobs.find(item=>item.id===jobId)
const colors=useThemedColors();
const styles=useThemedStyles(getstyles);

console.log(job)
const[isEditing,setEditing]=useState(false);
const[value,setValue]=useState();

  return(
        
    <View style={styles.jobdetailmaincontainer}>
        <View style={styles.jobcontainer}>

          <View style={styles.usercontainer}>
          <Text style={styles.jobtitletext}>Applied as:</Text>
          {isEditing?
          
          <TextInput
          style={styles.jobtext}
          value={value}
          onChangeText={(value)=>setValue(value)}
          onBlur={()=>setEditing(false)}/>
          :
          <Text style={styles.jobtext} onPress={()=>setEditing(true)}>{value}</Text> }

          </View>


          <View style={styles.jobtitle}>
          <Text style={styles.jobtitletext}>Job Title:</Text>
          <Text style={styles.jobtext}>{job.title}</Text>
          </View>
          <View style={styles.jobcompany}>
          <Text style={styles.jobtitletext}>Company:</Text>
          <Text style={styles.jobtext}>JOLLY ROGERS</Text>
          </View>
          <View style={styles.joblocation}>
          <Text style={styles.jobtitletext}>Location:</Text>
          <Text style={styles.jobtext}>{job.location}</Text>
          </View>
          <View style={styles.jobdescription}>
          <Text style={styles.jobtitletext}>Description:</Text>
          <Text style={styles.jobtext}>{job.content}</Text>
          </View>
          <View style={styles.jobURL}>
          <Text style={styles.jobtitletext}>URL:</Text>
          <Text style={styles.jobtext}>{job.URL}</Text>
          </View>
          <View style={styles.jobURL}>
          <Text style={styles.jobtitletext}>Applied On:</Text>
          <Text style={styles.jobtext}>{job.appdate}</Text>
          </View>
          <View style={styles.meetings}>
          <Text style={styles.jobtitletext}>Meetings held:</Text>
            <View style={styles.meeting}>
              <FlatList
              data={job.meetings}
              renderItem={(item)=>{
                return(
                <TouchableOpacity><Text style={styles.jobtext}>{item.item.id} - {item.item.date}</Text></TouchableOpacity>)
              }}
              keyExtractor={(item)=>item.id}
              
              />

            </View>
            
          </View>
          <AddJobButton size={45} name={'edit'} color={colors[colorNames.header.inputText]}/>
        </View>
        
        
        
          
          
    </View>
  )
  
}