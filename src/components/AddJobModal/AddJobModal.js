import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import getstyles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  colorNames,
  useThemedColors,
  useThemedStyles,
} from '../../modules/Theming';
import {employeeSelector} from '../../redux/employeesReducer';
import {useSelector} from 'react-redux';
import {
  addCompany,
  addCompanyRequest,
  companiesSelector,
  setComapnies,
} from '../../redux/companyReducer';
import {useNavigation} from '@react-navigation/native';
import MeetingInput from '../MeetingInput/MeetingInput';
import JobInput from '../JobInput/JobInput';
import DateInput from '../DateInput/DateInput';
import AddMeetingModal from '../MeetingModal/AddMeetingModal';
import Maximize from '../../components/icons/maximize.svg';
import {userSelector} from '../../redux/userReducer';
import {useDispatch} from 'react-redux';
import {addJobRequest} from '../../redux/jobsReducer';

export default AddJobModal = ({modalVisible,setModalVisible,data})=>{

  useEffect(() => {}, [modal2Visible, modalVisible]);

  const [userId,setUserId] = useState('');
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [location,setLocation] = useState('');
  const [appdate,setAppdate] = useState(Date.now());
  const [companyName,setCompanyName] = useState('');
  const [URL,setURL] = useState('');
  const [meetings,setMeetings] = useState([{id:1,meetingnotes:'very nice meeting',date:Date.now()}]);
  const[isValidEntries,setIsValidEntries]=useState(false)


const [modal2Visible,setModal2Visible] = useState(false);

  const styles = useThemedStyles(getstyles);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const curuser = useSelector(userSelector);


  const userEmail = curuser.email;

  const users = useSelector(employeeSelector);

  const companies = useSelector(companiesSelector);



useEffect(() => {
    if (users && curuser) {
      try {
        let currentUser = users.find(item => item.username === curuser.email);
        if (currentUser) {
          setUserId(currentUser.id);
        }
      }

   catch (error) {
        console.log(error);
      }

}}, [users]);

useEffect(() => {
  validateFields();
 }, [title,content,location,appdate,companyName,URL])

 const validateFields= () =>{
  if(title.length>2&content.length>3&location.length>2&companyName.length>2){
    setIsValidEntries(true)
    console.log('MALATSE')
  }
  else {
    console.log('PLEASE FILL ALL FIELDS')
    setIsValidEntries(false)
  }
}


  const newJob = {title:title,content:content,userId:userId,location:location,appdate:appdate,URL:URL};
  //console.log(newJob,'newjob to add')


  const submitNewJob = ()=>{
    if (isValidEntries){
    dispatch(addJobRequest(newJob, companyName,meetings));
    setModalVisible(false);
    }
    else {
      alert('please fill all the fields')
    }

  };

  return (


  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}>

      <View style={styles.centeredView}>




      <ScrollView style={styles.addjobcontainer}
          showsVerticalScrollIndicator={false}>
          <JobInput
            title={'Applied As:'}
            text={userEmail}
            state={setUserId}
            editable={false}
          />

          <JobInput title={'Job Title:'} text={title} state={setTitle} />

          <JobInput
            title={'Company Name:'}
            text={companyName}
            state={setCompanyName}
          />
          <JobInput title={'Location:'} text={location} state={setLocation} />

       <JobInput title={'Job Description:'} text={''} state={setContent}/>
          <JobInput title={'URL:'} text={URL} state={setURL} />



       <DateInput title={'Application Date:'} text={appdate} state={setAppdate}/>




        <TouchableOpacity style={styles.jobinputcontainer} onPress={()=>setModal2Visible(true)} >
            <Text style={styles.jobtitletext}>Add Interviews...</Text>
          </TouchableOpacity>


       <AddMeetingModal modalVisible={modal2Visible} setModalVisible={setModal2Visible} text={meetings} state={setMeetings} />

       <View style={styles.modalBottom}>

          <Pressable
              style={styles.modalbutton}
              onPress={() => submitNewJob()}>
              <Text style={styles.text}>Save</Text>
            </Pressable>

            <Pressable
              style={styles.modalbutton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.text}>Discard</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>


  </Modal>




  );
};


