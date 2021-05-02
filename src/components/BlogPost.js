import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import getstyles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colorNames, useThemedColors, useThemedStyles } from '../modules/Theming';
import { employeeSelector } from '../redux/employeesReducer';
import { useSelector } from 'react-redux';
import { companiesSelector } from '../redux/companyReducer';
import { useNavigation } from '@react-navigation/native';


export default BlogPost=({data})=>{
  const styles= useThemedStyles(getstyles)
  const job=data.item;
  const navigation = useNavigation();
  
  const users=useSelector(employeeSelector)
  const companies=useSelector(companiesSelector)
  const currentUser=users.find(item=>item.id===job.userId)
  const currentCompany=companies.find(item=>item.id===job.companyId)
  const colors=useThemedColors();
  
  return(

 
        <View style={styles.blog}>
          
          <TouchableOpacity style={styles.blogleft}>
            <FontAwesome name='user-circle-o' size={20} style={styles.portraiticon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blogright} onPress={()=>navigation.navigate('Job Details')}>
          {!currentCompany?  <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/> :
            <Text style={styles.blogtitletext} numberOfLines={1}>{currentCompany.name}</Text> }
            <Text style={styles.blogtitletext} >{job.title}</Text>
            
            {currentUser?
            <Text style={styles.blogtext}>{currentUser.username} on 9.34pm, 24/08/2011</Text> 
            :
            <ActivityIndicator size="small" color={colors[colorNames.header.inputText]}/>}

          </TouchableOpacity>
        </View>

        

      
 
  )
}