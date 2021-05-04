



import { View,Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useThemedStyles } from '../modules/Theming';
import getstyles from './styles'  
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

export default DateInput=({title,text})=>{
useEffect(() => {
    setValue(text)
   
}, [])
const [date, setDate] = useState(new Date(1598051730000));
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const formdate=moment(date).format("DD-MM-YYYY")
  console.log(formdate)


 const[isEditing,setEditing]=useState(false);
 const[value,setValue]=useState();
 
 const styles=useThemedStyles(getstyles);

    return(
    <View style={styles.jobinputcontainer}> 
        <Text style={styles.jobtitletext}>{title}</Text>
        {isEditing?
        
        <TextInput
        style={styles.jobtext}
        value={value.toString()}
        onChangeText={(value)=>setValue(value)}
        onBlur={()=>setEditing(false)}/>
        :
        <Text style={styles.jobtext} onPress={()=>setEditing(true)}>{value}</Text> }
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

