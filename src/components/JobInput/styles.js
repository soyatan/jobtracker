import  {width as w,height as h} from '../../constants/Metrics'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({
    
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
        backgroundColor:Colors[cn.jobs.jobinputbackground],
        borderBottomWidth:0.2,
        paddingBottom:5,
        marginBottom:5,
        marginTop:3,
        fontSize:14,
        borderRadius:10,
        opacity:0.5,
        
        
        
    },

    jobinputlinkcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    jobinputtextcontainer:{
     
        flex:9

    },
    
    jobtitletext:{
        textAlignVertical:'center',
        fontWeight:'bold',
        fontSize:16,
        color:Colors[cn.jobs.jobtextcolor],
        
        
    },
    jobinputcontainerinside:{
        flexDirection:'row',
        
        alignContent:'stretch',
        justifyContent:'space-between'
        
        
    }
    
})



