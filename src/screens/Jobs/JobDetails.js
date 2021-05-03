import React, { useState } from 'react'
import { View,Text,FlatList, TouchableOpacity, TextInput,ScrollView} from 'react-native'

import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import JobInput from '../../components/JobInput'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming'
import { jobsSelector } from '../../redux/jobsReducer'
import getstyles from './styles'

import Minimize from '../../components/minimize.svg'
import Maximize from '../../components/maximize.svg'
import Inside from '../../components/inside.svg'
import MeetingModal from '../../components/meetingModal'

export default JobDetails =({route})=>{
const{jobId}=route.params
const jobs=useSelector(jobsSelector);
const job=jobs.find(item=>item.id===jobId)
const colors=useThemedColors();
const styles=useThemedStyles(getstyles);

console.log(jobs)
const[isEditing,setEditing]=useState(false);
const[showMeetings,setShowMeetings]=useState(false);
const [modalVisible, setModalVisible] = useState(false);
console.log(modalVisible)
const showMeetingsTouch=()=>{
  if(job.meetings.length<1){
    return alert('no meetings found')
  }
  else {
  setModalVisible(true);}
}
const hideMeetingsTouch=()=>{
 
  setShowMeetings(false);}

  return(
    <>
  
    <View style={styles.jobdetailmaincontainer}>
      
        <ScrollView style={styles.jobcontainer}>

         <JobInput title={'Applied As:'} text={job.userId}/>

         <JobInput title={'Job Title:'} text={job.title}/>

         <JobInput title={'Company Name:'} text={job.companyId}/>
         <JobInput title={'Location:'} text={job.location}/>
         <JobInput title={'Job Description:'} text={job.content}/>
         <JobInput title={'Job Description:'} text={job.content}/>
         <JobInput title={'Job Description:'} text={job.content}/>
         <JobInput title={'URL:'} text={job.URL}/>
         <JobInput title={'Application Date:'} text={job.appdate}/>
         
         <MeetingModal data={job.meetings} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
   

        </ScrollView>
      
        <View style={styles.meetings}>

<Text style={{color:'black',paddingLeft:5,fontWeight:'bold',fontSize:20}}>{job.meetings.length} interviews found!  </Text>
            <TouchableOpacity onPress={()=>showMeetingsTouch()} >
              <Maximize width={35} height={35}/>
            </TouchableOpacity>
          </View>
          
    </View>
    </>
  )
  
}
/*

<TouchableOpacity onPress={()=>hideMeetingsTouch()}>
<Inside width={35} height={35}/>
</TouchableOpacity>*/