import React from 'react'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'
import  {width as w,height as h} from '../../constants/Metrics'

export default styles=(Colors)=>StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: Colors[cn.auth.background],
        flexGrow:1,
        padding:h*0.02,
        paddingTop:h*0.04,
    },

  
    socialcontainer:{
        paddingTop:h*0.05,        
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    forgotpasswordcontainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:h*0.02,
        
    },
    textred:{
        color:'red',
    },
    validationcontainer:{
        textAlignVertical:'center',
        justifyContent:'center',
        height:h*0.02,
    }

})




