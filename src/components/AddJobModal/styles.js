import  {width as w,height as h} from '../../constants/Metrics'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({

    centeredView:{
        marginTop:h*0.08,
        marginRight:h*0.012,
        marginLeft:h*0.012,
        marginBottom:h*0.005,
        flex:1,
        borderColor:'white',
        borderRadius:15,
        padding:h*0.015,
        backgroundColor:Colors[cn.jobs.modalbackground],
        
        
    },

    addjobcontainer:{
         
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
     text:{
        color:'black',
        fontWeight:'bold'
    },
    jobinputcontainer:{
        backgroundColor:Colors[cn.jobs.background],
        margin:h*0.01,
        padding:h*0.015,
        justifyContent:'center',
        borderRadius:15,
        textAlignVertical:'center',
        
    },
    jobtext:{
        
        
        color:Colors[cn.jobs.jobtextcolor2],
        fontSize:14,
        
        
        
        
    },
    jobtitletext:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:16,
        color:Colors[cn.jobs.jobtextcolor],
        
    },



})



