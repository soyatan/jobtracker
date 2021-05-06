



import { View,Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';

import getstyles from './styles'  
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { useThemedStyles } from '../../modules/Theming';

export default MeetingDateInput=({title,text,state,id,add})=>{
  useEffect(() => {
    
   
}, [])
const [date, setDate] = useState(new Date(text));
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    add(id,date)
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const formdate=moment(date).format("DD-MM-YYYY")
  



 
 
 
 const styles=useThemedStyles(getstyles);

    return(
    <View style={styles.jobinputcontainer}> 
        <Text style={styles.jobtitletext}>{title}</Text>
        
      
       
  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={'spinner'}
          display="default"
          onChange={onChange}
        />)}
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.jobtext}>{formdate}</Text>
       </TouchableOpacity>
    </View>
     
    )
  
}

