import React from 'react'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({
    textinputcontainer:{
        paddingTop:10,
    },
    textinput:{

      borderColor:Colors[cn.auth.inputBackground],
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
    blog:{
        backgroundColor:Colors[cn.jobs.background],
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
    }

})



