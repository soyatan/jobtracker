import  {width as w,height as h} from '../../constants/Metrics'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({
    textinputcontainer:{
        paddingTop:h*0.022,
    },
    textinput:{
      backgroundColor:Colors[cn.auth.inputBackground],
      
      
    },
    text:{
        color:'black',
        fontWeight:'bold'
    },
    addbutton:{
        //backgroundColor:'#BB86FC',
        alignItems:'center'
        
        
    },
    blogcontainer:{
        margin:5,
        backgroundColor:'#BB86FC',
        //paddingTop:25,        
        //height:50,
        justifyContent:'center',
        
    },
    dateinputcontainer:{
        backgroundColor:Colors[cn.jobs.background],
        margin:5,
        padding:8,
        justifyContent:'center',
        borderRadius:15,
        textAlignVertical:'center',

    },
    blog:{
        backgroundColor:Colors[cn.jobs.background],
        borderRadius:15,
        padding:8,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        flexDirection:'row',
    },
    blogright:{
        justifyContent:'center',
        flex:8,
    },
    blogleft:{
        alignItems:'center',
        alignContent:'center',
        
        flex:1,
        justifyContent:'center',
    },
        

    blogtext:{
        textAlignVertical:'center',
        color:Colors[cn.jobs.jobtextcolor],
        
    },
    blogtitletext:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:20,
        color:Colors[cn.jobs.jobtextcolor],
    },
    button:{

        backgroundColor:'#BB86FC',
        borderRadius:10,
        margin:5,
        height:40,
        marginTop:25,
        
        justifyContent:'center',
        alignItems:'center',
    },
    button2:{

        backgroundColor:'#268959',
        borderRadius:10,
        margin:5,
        height:40,
        marginTop:25,
        
        justifyContent:'center',
        alignItems:'center',
    },
    portraiticon:{

        color:Colors[cn.jobs.jobtextcolor],
    },
    socialbutton:{

        //backgroundColor:'#BB86FC',
        borderWidth:0.5,
        borderRadius:10,
        margin:5,
        height:50,
        width:80,
        marginTop:15,
        
        justifyContent:'center',
        alignItems:'center',
    },
    jobinputcontainer:{
        backgroundColor:Colors[cn.jobs.background],
        margin:5,
        padding:8,
        justifyContent:'center',
        borderRadius:15,
        textAlignVertical:'center',
        
    },
    jobtext:{
        color:Colors[cn.jobs.jobtextcolor2],
        backgroundColor:Colors[cn.jobs.jobinputbackground],
        borderBottomWidth:0.2,
        paddingBottom:5,
        paddingLeft:3,
        marginBottom:5,
        fontSize:14,
        borderRadius:10,
        opacity:0.5,
        
    },
    jobtitletext:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:17,
        color:Colors[cn.jobs.jobtextcolor],
        paddingBottom:5,
        
    },
    centeredView:{
        marginTop:80,
        marginRight:10,
        marginLeft:10,
        flex:1,
        borderColor:'white',
        borderRadius:15,
        padding:15,
        backgroundColor:Colors[cn.jobs.modalbackground],
        alignContent:'flex-end',
        
    
        
    },
   
    modalBottom:{
        
        flexDirection:'row',
        
        justifyContent:'space-between',
        alignItems:'flex-end',
        alignContent:'flex-end',
        
        alignSelf:'flex-end',
        marginTop:20,        
         
     },
     modalbutton:{
        backgroundColor:Colors[cn.jobs.modalbuttonbackground],
         alignSelf:'stretch',
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         margin:5,
         borderRadius:15,
         borderWidth:1,
     },
     meetingheader:{
        backgroundColor:Colors[cn.jobs.modalbuttonbackground],
         alignSelf:'stretch',
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         margin:5,
         borderRadius:15,
         borderWidth:1,
     },
     addjobcontainer:{
        
        
         
         
     },

})



