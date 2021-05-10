import React, { useState,useEffect } from 'react'
import { View,Text,FlatList, TouchableOpacity, TextInput,ScrollView, Pressable} from 'react-native'


import { useSelector } from 'react-redux'
import JobInput from '../../components/JobInput/JobInput'
import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming'
import { addJobRequest, jobsSelector, updateJobRequest } from '../../redux/jobsReducer'
import getstyles from './styles'


import Maximize from '../../components/icons/maximize.svg'

import MeetingModal from '../../components/MeetingModal/MeetingModal'
import { employeeSelector } from '../../redux/employeesReducer'
import DateInput from '../../components/DateInput/DateInput'
import AddMeetingModal from '../../components/MeetingModal/AddMeetingModal'
import { useDispatch } from 'react-redux'


export default JobDetails =({route,navigation})=>{
  
  
  const{jobId}=route.params
  const{currentUser}=route.params
  const jobs=useSelector(jobsSelector);
  const job=jobs.find(item=>item.id===jobId)
  const{companyname}=route.params

  const[userId,setUserId]=useState(job.userId);
  const[title,setTitle]=useState(job.title);
  const[content,setContent]=useState(job.content);
  const[location,setLocation]=useState(job.location);
  const[appdate,setAppdate]=useState((new Date()).toISOString());
  const[companyName,setCompanyName]=useState(companyname.name);
  const[URL,setURL]=useState(job.URL);
  const[meetings,setMeetings]=useState(job.meetings);
  const[modal2Visible,setModal2Visible]=useState(false)
const dispatch = useDispatch()

const newJob={title:title,content:content,userId:userId,location:location,appdate:appdate,URL:URL,meetings:meetings}
console.log(newJob)
const updateJob =()=>{
    
  dispatch(updateJobRequest(newJob,companyName,job.id))
  setModal2Visible(false)
  navigation.navigate('Jobs Index')


}

const colors=useThemedColors();
const styles=useThemedStyles(getstyles);

//console.log(jobs)
const[isEditing,setEditing]=useState(false);
const[showMeetings,setShowMeetings]=useState(false);
const [modalVisible, setModalVisible] = useState(false);



//console.log(modalVisible)
const showMeetingsTouch=()=>{
  if(job.meetings.length<1){
    return alert('no meetings found')
  }
  else {
  setModal2Visible(true);}
}

const hideMeetingsTouch=()=>{
 
  setShowMeetings(false);}


  

  return(
    <>
  
    <View style={styles.jobdetailmaincontainer}>
      
        <ScrollView 
        style={styles.jobcontainer}
        showsVerticalScrollIndicator={false}>

         <JobInput linktype={'EMAIL'} url={currentUser.username} title={'Applied As:'} text={currentUser.username}/>
       

         <JobInput title={'Job Title:'} text={title} state={setTitle}/>

         <JobInput title={'Company Name:'}  text={companyName} state={setCompanyName}/>
         <JobInput linktype={'MAP'} url={location} title={'Location:'} text={location} state={setLocation}/>
         <JobInput title={'Job Description:'} text={content} state={setContent}/>

         <JobInput linktype={'URL'} url={URL} title={'URL:'}  text={URL} state={setURL}/>
         <DateInput title={'Application Date:'}  text={appdate} state={setAppdate}/>
         
         
{         <MeetingModal data={job.meetings} modalVisible={modalVisible} setModalVisible={setModalVisible}/> }
         <AddMeetingModal modalVisible={modal2Visible} setModalVisible={setModal2Visible} text={meetings} state={setMeetings} />
         <View style={styles.meetings}>

<Text style={styles.meetingstext}>{job.meetings.length} interviews found!  </Text>
<TouchableOpacity onPress={()=>showMeetingsTouch()} >
    <Maximize width={styles.meetingicon.width} height={styles.meetingicon.height}/>
</TouchableOpacity>
</View>

         <View style={styles.modalBottom}>
          
          <Pressable
            style={styles.modalbutton}
            onPress={() => updateJob()}
          >
            <Text style={styles.text}>Save</Text>
          </Pressable>


          <Pressable
            style={styles.modalbutton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.text}>Discard</Text>
          </Pressable>
          </View>
          
        </ScrollView>
       
       
    </View>
    </>
  )
  
}
