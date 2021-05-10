



import { View,Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';

import getstyles from './styles'  
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { useThemedStyles } from '../../modules/Theming';

export default DateInput=({title,text,state})=>{
  useEffect(() => {
    
   
}, [])
const [date, setDate] = useState(new Date(text));
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
//console.log(date)
const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    
    state(currentDate)
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  //console.log('date',date)
  //console.log('text',text)
  const showDatepicker = () => {
    showMode('date');
  };
  
  


 
 
 
 const styles=useThemedStyles(getstyles);

    return(
    <View style={styles.jobinputcontainer}> 
        <Text style={styles.jobtitletext}>{title}</Text>
        
      
       
  {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(text)}
          mode={mode}
          is24Hour={true}
          display={'spinner'}
          display="default"
          onChange={onChange}
        />)}
        <TouchableOpacity style={styles.dateinputcontainer} onPress={showDatepicker}>
          <Text style={styles.jobtext}>{(moment(text)).format("DD-MM-YYYY")}</Text>
       </TouchableOpacity>
    </View>
     
    )
  
}

