import React from 'react'
import { View,Text,TouchableOpacity,FlatList, Modal,Pressable} from 'react-native'

import getstyles from './styles'

import { colorNames, useThemedColors, useThemedStyles } from '../../modules/Theming';
import { employeeSelector } from '../../redux/employeesReducer';
import { useSelector } from 'react-redux';
import { companiesSelector } from '../../redux/companyReducer';
import { useNavigation } from '@react-navigation/native';
import MeetingInput from '../MeetingInput/MeetingInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default MeetingModal=({modalVisible,setModalVisible,data})=>{
  console.log('data',data)
  const styles= useThemedStyles(getstyles)
  
  const navigation = useNavigation();
  
  const users=useSelector(employeeSelector)
  const companies=useSelector(companiesSelector)

  const colors=useThemedColors();
  
  return(

 
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
  >
  <View style={styles.centeredView}>

  <FlatList
  
    data={data}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>{
      return (           
        <>
        <View style={styles.meetingcontainer}>
          <View style={styles.meetingheader}><Text style={{fontWeight:'bold'}}>Meeting No: {item.id}</Text>
          <TouchableOpacity style={styles.trashiconcontainer}>
          <FontAwesome name='trash' size={24} />
          </TouchableOpacity>
        </View>
          
          <MeetingInput title={'Date'} text={item.date} />
          <MeetingInput title={'Notes'} text={item.meetingnotes} />
          </View>
          </>
      )
    
      
    }}
    keyExtractor={(item)=>item.id}

    />

    <View style={styles.modalBottom}>
      
    <Pressable
      style={styles.modalbutton}
      onPress={() => setModalVisible(false)}
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
  </View>                           
      
    
  </Modal>
        

      
 
  )
}


