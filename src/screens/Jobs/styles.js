import React from 'react'
import { StyleSheet } from 'react-native'
import { colorNames as cn, useThemedColors }  from '../../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Colors[cn.header.background],
        alignItems:'stretch',
        flexGrow:1,
        padding:5,
        paddingTop:35,
    },
    jobdetailmaincontainer:{
        flex:1,
        backgroundColor:Colors[cn.header.background],
       
        flexGrow:1,
        padding:5,
        
    },
    blogcontainer:{
        margin:5,
        backgroundColor:Colors[cn.header.background],
        //paddingTop:25,        
        //height:50,
        justifyContent:'center',
        flex:5,
        
    },
    blogtext:{
        textAlignVertical:'center',
        color:Colors[cn.jobs.jobtextcolor],
        
    },
    addnewjobcontainer:{
        margin:5,
        backgroundColor:Colors[cn.header.background],
        //paddingTop:25,        
        //height:50,
        justifyContent:'center',
        flex:1,
        
    },

   
    jobcontainer:{
        margin:5,
        backgroundColor:Colors[cn.header.background],
        //paddingTop:25,        
        //height:50,
        
        flex:1,
        
    },
    usercontainer:{

        backgroundColor:Colors[cn.jobs.background],
        margin:5,
        
        justifyContent:'center',
        textAlignVertical:'center',
        
    },
    jobtitle:{

        backgroundColor:Colors[cn.jobs.background],
        margin:5,
    },
    jobcompany:{
        backgroundColor:Colors[cn.jobs.background],
        margin:5,
    },
    joblocation:{
        margin:5,
        backgroundColor:Colors[cn.jobs.background],
    },
    jobdescription:{
        margin:5,
        backgroundColor:Colors[cn.jobs.background],
        
    },
    jobURL:{
        margin:5,
        backgroundColor:Colors[cn.jobs.background],
        
        
    },
    meetings:{

        backgroundColor:Colors[cn.jobs.modalbackground],
        margin:5,
        padding:8,
        justifyContent:'space-between',
        borderRadius:15,
        textAlignVertical:'center',
        flexDirection:'row',
        alignItems:'center',

        
        
    },
    meeting:{
        margin:5,
        padding:5,
        
        flex:1,
        
        alignItems:'stretch',
        justifyContent:'space-between',
        
        
    },
    meetingItem:{
        margin:5,
        padding:5,
       flex:1,
        backgroundColor:Colors[cn.header.background],
        borderRadius:15,
      
        
    },
    jobtext:{
        textAlignVertical:'center',
        color:Colors[cn.jobs.jobtextcolor],
        fontSize:15,
        
    },
    jobtitletext:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:17,
        color:Colors[cn.jobs.jobtextcolor],
        
    },
    
 

})



