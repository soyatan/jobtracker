import React from 'react'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'



export default styles=(Colors)=>StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: Colors[cn.auth.background],
        
        flexGrow:1,
        padding:5,
        paddingTop:35,
    },
    text1:{
        color:'red',
        
        
    },
    socialcontainer:{
        paddingTop:25,        
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    passwordtextcontainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:5,
        
    }

})




