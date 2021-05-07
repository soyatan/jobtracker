import React, { useState } from 'react'
import { View,Text,FlatList, TouchableOpacity, TextInput,ScrollView} from 'react-native'


import { useSelector } from 'react-redux'
import JobInput from '../../components/JobInput/JobInput'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming'
import { jobsSelector } from '../../redux/jobsReducer'
import getstyles from './styles'


import Maximize from '../../components/icons/maximize.svg'

import MeetingModal from '../../components/MeetingModal/MeetingModal'

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
      
        <ScrollView 
        style={styles.jobcontainer}
        showsVerticalScrollIndicator={false}>

         <JobInput title={'Applied As:'} text={'ahmet'}/>

         <JobInput title={'Job Title:'} text={job.title}/>

         <JobInput title={'Company Name:'} text={'kampiniy'}/>
         <JobInput title={'Location:'} text={job.location}/>
         <JobInput title={'Job Description:'} text={job.content}/>

         <JobInput title={'URL:'} text={job.URL}/>
         <JobInput title={'Application Date:'} text={job.appdate}/>
         
         <MeetingModal data={job.meetings} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
   

        </ScrollView>
      
        <View style={styles.meetings}>

          <Text style={styles.meetingstext}>{job.meetings.length} interviews found!  </Text>
          <TouchableOpacity onPress={()=>showMeetingsTouch()} >
              <Maximize width={styles.meetingicon.width} height={styles.meetingicon.height}/>
          </TouchableOpacity>
        </View>
          
    </View>
    </>
  )
  
}
