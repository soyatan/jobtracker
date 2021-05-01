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
   
    blogcontainer:{
        margin:5,
        backgroundColor:Colors[cn.header.background],
        //paddingTop:25,        
        //height:50,
        justifyContent:'center',
        
    }  
 

})



