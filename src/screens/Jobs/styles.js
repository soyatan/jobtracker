
import { StyleSheet } from 'react-native'
import { colorNames as cn, useThemedColors }  from '../../modules/Theming'
import  {width as w,height as h} from '../../constants/Metrics'

export default styles=(Colors)=>StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Colors[cn.header.background],
        alignItems:'stretch',
        flexGrow:1,
        padding:w*0.01,
        paddingTop:w*0.02,
    },
    searchbarcontainer:{
        paddingLeft:w*0.03,
        paddingRight:w*0.03,
        
        margin:w*0.01,
        flex:1,
        

    },
    searchbar:{
        backgroundColor:Colors[cn.searchbar.background],
        borderRadius:15,
        
    },

    blogcontainer:{
        margin:h*0.01,
        backgroundColor:Colors[cn.header.background],
       
        justifyContent:'center',
        flex:10,
        
    },
    addnewjobcontainer:{
        margin:h*0.01,
        backgroundColor:Colors[cn.header.background],
        //paddingTop:25,        
        //height:50,
        justifyContent:'center',
        flex:1,
        
    },


    jobdetailmaincontainer:{
        flex:1,
        backgroundColor:Colors[cn.header.background],
       
        flexGrow:1,
        padding:w*0.01,
        
    },
  
    jobcontainer:{
        margin:w*0.01,
        backgroundColor:Colors[cn.header.background],
       
        
        flex:1,
        
    },
    meetings:{

        backgroundColor:Colors[cn.jobs.modalbackground],
        margin:w*0.015,
        padding:w*0.015,
        justifyContent:'space-between',
        borderRadius:15,
        textAlignVertical:'center',
        flexDirection:'row',
        alignItems:'center',

    },
    meetingstext:{
        color:'black',
        paddingLeft:w*0.01,
        fontWeight:'bold',
        fontSize:w*0.04
    },
    meetingicon:{
        width:w*0.1,
        height:w*0.08,
    },


    modalBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        alignContent:'flex-end',
        alignSelf:'flex-end',
        marginTop:h*0.01,        
         
     },
     modalbutton:{
        backgroundColor:Colors[cn.jobs.modalbuttonbackground],
         alignSelf:'stretch',
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         margin:h*0.01,
         borderRadius:15,
         borderWidth:1,
         height:h*0.05
        },





    blogtext:{
        textAlignVertical:'center',
        color:Colors[cn.jobs.jobtextcolor],
        
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
    text:{
        color:'black',
        fontWeight:'bold'
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



