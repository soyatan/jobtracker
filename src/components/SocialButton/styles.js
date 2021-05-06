import  {width as w,height as h} from '../../constants/Metrics'
import { StyleSheet } from 'react-native'

import { colorNames as cn, useThemedColors }  from '../../modules/Theming'

export default styles=(Colors)=>StyleSheet.create({
    
    text:{
        color:'black',
        fontWeight:'bold'
    },
    socialbutton:{

        //backgroundColor:'#BB86FC',
        borderWidth:0.5,
        borderRadius:10,
        margin:10,
        padding:h*0.01,
        height:w*0.15,
        width:w*0.2,
        marginTop:15,
        
        justifyContent:'center',
        alignItems:'center',
    },

})



