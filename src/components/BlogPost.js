import React from 'react'
import { View,Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export default BlogPost=({data})=>{
  const blog=data.item;
  return(

   
        <View style={styles.blog}>
          <View style={styles.blogleft}>
          <FontAwesome name='user-circle-o' size={20}/>
          </View>
          <View style={styles.blogright}>
          
         
          <Text style={styles.blogtitletext} >{blog.title}</Text>
          {/*<Text style={styles.blogtext} numberOfLines={1}>{blog.content}</Text>*/}
          <Text style={styles.blogtext}>sent by user:{blog.userId} on 9.34pm, 24/08/2011</Text>
          </View>
        </View>

        

      
 
  )
}