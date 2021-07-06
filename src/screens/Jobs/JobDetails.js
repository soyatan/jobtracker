import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';

import {useSelector} from 'react-redux';
import JobInput from '../../components/JobInput/JobInput';
import {
  colorNames,
  useThemedColors,
  useThemedStyles,
} from '../../modules/Theming';
import {
  addJobRequest,
  fetchJobsRequest,
  jobsSelector,
  setJobs,
  updateJobRequest,
} from '../../redux/jobsReducer';
import getstyles from './styles';

import Maximize from '../../components/icons/maximize.svg';

import MeetingModal from '../../components/MeetingModal/MeetingModal';
import {employeeSelector} from '../../redux/employeesReducer';
import DateInput from '../../components/DateInput/DateInput';
import AddMeetingModal from '../../components/MeetingModal/AddMeetingModal';
import {useDispatch} from 'react-redux';
import {set} from 'lodash';

export default JobDetails = ({route, navigation}) => {
  //console.log(route.params)
  const {jobId} = route.params;
  const {currentUser} = route.params;
  const jobs = useSelector(jobsSelector);
  //const[job,setJob]=useState({userId:'',title:'',content:'',location:'',appdate:new Date().toISOString(),meetings:[],URL:''})
  const job = jobs.find(item => item.id === jobId);
  console.log(job.meetings);

  const {companyname} = route.params;

  const [userId, setUserId] = useState(job.userId);
  const [title, setTitle] = useState(job.title);
  const [content, setContent] = useState(job.content);
  const [location, setLocation] = useState(job.location);
  const [appdate, setAppdate] = useState(new Date(job.appdate));
  const [companyName, setCompanyName] = useState(companyname.name);
  const [URL, setURL] = useState(job.URL);
  const [meetings, setMeetings] = useState(job.meetings);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [isupdate, setisupdated] = useState(false);
  const [isValidEntries, setIsValidEntries] = useState(false);

  console.log('isvalid?', isValidEntries);
  const dispatch = useDispatch();

  useEffect(() => {
    validateFields();
  }, [title, content, location, appdate, companyName, URL]);
  /*
  useEffect(() => {
   const unsubscribe1=navigation.addListener('focus',()=>{
    console.log('wilkommen',jobId)
   setisupdated(true)
   });
   
  
  }, [navigation])

  useEffect(() => {
    const unsubscribe1=navigation.addListener('blur',()=>{
     console.log('bye',jobId)
    setisupdated(false)
    });
    
   
   }, [navigation])
  
  useEffect(() => {
 
  }, [isupdate])
    
   */
  const validateFields = () => {
    if (
      (title.length > 2) &
      (content.length > 3) &
      (location.length > 2) &
      (companyName.length > 2)
    ) {
      setIsValidEntries(true);
      console.log('MALATSE');
    } else {
      console.log('PLEASE FILL ALL FIELDS');
      setIsValidEntries(false);
    }
  };

  const newJob = {
    title: title,
    content: content,
    userId: userId,
    location: location,
    appdate: appdate,
    URL: URL,
  };
  console.log('appdata inside update ', appdate);

  const updateJob = () => {
    if (isValidEntries) {
      dispatch(updateJobRequest(newJob, companyName, job.id, meetings));
      setModal2Visible(false);
      navigation.navigate('Jobs Index');
    } else {
      alert('please fill all the fields');
    }
  };

  const discardChanges = () => {
    setModal2Visible(false);
    navigation.navigate('Jobs Index');
  };

  const colors = useThemedColors();
  const styles = useThemedStyles(getstyles);

  //console.log(jobs)
  const [isEditing, setEditing] = useState(false);
  const [showMeetings, setShowMeetings] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //console.log(modalVisible)
  const showMeetingsTouch = () => {
    if (!job.meetings || job.meetings.length < 1) {
      return alert('no meetings found');
    } else {
      setModal2Visible(true);
    }
  };

  return (
    <>
      {job ? (
        <View style={styles.jobdetailmaincontainer}>
          <ScrollView
            style={styles.jobcontainer}
            showsVerticalScrollIndicator={false}>
            <JobInput
              linktype={'EMAIL'}
              url={currentUser.username}
              title={'Applied As:'}
              text={currentUser.username}
            />

            <JobInput title={'Job Title:'} text={title} state={setTitle} />

            <JobInput
              title={'Company Name:'}
              text={companyName}
              state={setCompanyName}
            />
            <JobInput
              linktype={'MAP'}
              url={location}
              title={'Location:'}
              text={location}
              state={setLocation}
            />
            <JobInput
              title={'Job Description:'}
              text={content}
              state={setContent}
            />

            <JobInput
              linktype={'URL'}
              url={URL}
              title={'URL:'}
              text={URL}
              state={setURL}
            />
            <DateInput
              title={'Application Date:'}
              text={appdate}
              state={setAppdate}
            />

            {
              <MeetingModal
                data={job.meetings}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            }
            <AddMeetingModal
              modalVisible={modal2Visible}
              setModalVisible={setModal2Visible}
              text={meetings}
              state={setMeetings}
            />
            <View style={styles.meetings}>
              {job.meetings ? (
                <Text style={styles.meetingstext}>
                  {job.meetings.length} interviews found!{' '}
                </Text>
              ) : (
                <Text style={styles.meetingstext}>No interviews found! </Text>
              )}
              <TouchableOpacity onPress={() => showMeetingsTouch()}>
                <Maximize
                  width={styles.meetingicon.width}
                  height={styles.meetingicon.height}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBottom}>
              <Pressable style={styles.modalbutton} onPress={() => updateJob()}>
                <Text style={styles.text}>Save</Text>
              </Pressable>

              <Pressable
                style={styles.modalbutton}
                onPress={() => discardChanges()}>
                <Text style={styles.text}>Discard</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>please wait...</Text>
        </View>
      )}
    </>
  );
};
