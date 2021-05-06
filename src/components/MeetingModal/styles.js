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
     meetingheader:{
        backgroundColor:Colors[cn.jobs.modalbuttonbackground],
         paddingLeft:w*0.03,
         paddingRight:w*0.03,
         
         justifyContent:'center',
         alignItems:'center',
         marginBottom:h*0.008,
         borderRadius:15,
         borderWidth:1,
         height:h*0.04,
         flexDirection:'row',
     },
     meetingcontainer:{
         borderBottomWidth:0.5,
         marginBottom:h*0.007,
         marginTop:h*0.01,
         borderStyle:'dashed'
         
     },
     trashiconcontainer:{
        marginLeft:'auto'        
    },

    text:{
        color:'black',
        fontWeight:'bold'
    },
   
   
})



