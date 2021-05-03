import React from 'react'
import { View,Text,TouchableOpacity,FlatList, Modal,Pressable} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../modules/Theming';
import { employeeSelector } from '../redux/employeesReducer';
import { useSelector } from 'react-redux';
import { companiesSelector } from '../redux/companyReducer';
import { useNavigation } from '@react-navigation/native';
import MeetingInput from './MeetingInput';


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
        renderItem={({item})=>{
          return (           
            <>
             <View style={styles.meetingheader}><Text style={{fontWeight:'bold'}}>Meeting No: {item.id}</Text></View>
             
             <MeetingInput title={'Date'} text={item.date} />
             <MeetingInput title={'Notes'} text={item.meetingnotes} />
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
          <Text style={styles.textStyle}>Save</Text>
        </Pressable>
        <Pressable
          style={styles.modalbutton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.textStyle}>Discard</Text>
        </Pressable>
        </View>
      </View>
      
    
  </Modal>
        

      
 
  )
}


