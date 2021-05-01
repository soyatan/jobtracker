import React, { useState } from 'react'
import { View,Text,Switch,TouchableOpacity} from 'react-native'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import SocialButton from '../../components/SocialButton'
import getStyles from './styles'
import auth from '@react-native-firebase/auth';

import { userForgotPassword, userLogInRequest, userSetRequest } from '../../redux/userReducer'
import { useDispatch } from 'react-redux'
import { useDispatchChangeTheme, useThemedStyles } from '../../modules/Theming'
import { changeTheme, ThemeActions } from '../../redux/themeReducer'
import { Texts, useLocalization } from '../../modules/Localization'
//import Switch from 'react-native-dark-mode-switch';



export default AuthScreen=()=>{
  const [value, setValue] = useState(true);
  const loc=useLocalization();
  const styles= useThemedStyles(getStyles)
  console.log('styles',styles)
  const[isSignIn,setSignIn]=useState(true);

  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[confirmPassword,setConfirmPassword]=useState();
  const dispatch = useDispatch()

  const RegisterUser = ()=>{
    console.log('dispatching set-user-request...')
    dispatch(userSetRequest(email,password))   
  }
  const SignInUser = ()=>{
    console.log('dispatching login process.')
    dispatch(userLogInRequest(email,password))   
  }
  const ForgotPassword = ()=>{
    console.log('remembering the password process.')
    dispatch(userForgotPassword(email))

    //auth().sendPasswordResetEmail(email)
  }
  
  const changeThemeHere = (key)=>{
    dispatch(ThemeActions.changeTheme({themeMode: key}))
    
  }
 

  return(

    <>
    <View style={styles.container}>

      <AuthInput label={loc.t(Texts.email)} onChangeText={(userEmail)=>setEmail(userEmail)} labelValue={email} keyboardType='email-address'/>

      <AuthInput label={loc.t(Texts.password)}  onChangeText={(userPassword)=>setPassword(userPassword)} labelValue={password} secureTextEntry={true}/>

      {isSignIn ? null : 
      <AuthInput label={loc.t(Texts.password)}  onChangeText={(userPassword)=>setPassword(userPassword)}  labelValue={confirmPassword} secureTextEntry={true} />}
      
      <TouchableOpacity style={styles.passwordtextcontainer} onPress={()=>{ForgotPassword()}}><Text style={styles.text1}>{loc.t(Texts.forgotpassword)} </Text></TouchableOpacity>
      
      <AuthButton label={isSignIn ? loc.t(Texts.signin) : loc.t(Texts.signup)} onPress={()=>{isSignIn? SignInUser() : RegisterUser()}}/>

      <AuthButton  label={isSignIn ? loc.t(Texts.signup) : loc.t(Texts.signin)} onPress={()=>{isSignIn? setSignIn(false) : setSignIn(true) }} />
      
      <View style={styles.socialcontainer}>

        <SocialButton name='twitter'/>
        <SocialButton name='facebook'/>
        <SocialButton name='google'/>
        <SocialButton name='linkedin'/>
        
      </View>
     
   
    </View>
    </>
  )
}