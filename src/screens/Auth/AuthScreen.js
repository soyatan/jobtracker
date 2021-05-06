import React, { useState } from 'react'
import { View,Text,TouchableOpacity} from 'react-native'

import getStyles from './styles'


import { userForgotPassword, userLogInRequest, userSetRequest } from '../../redux/userReducer'
import { useDispatch } from 'react-redux'
import { useThemedStyles } from '../../modules/Theming'
import { Texts, useLocalization } from '../../modules/Localization'

import AuthButton from '../../components/AuthButton/AuthButton';
import AuthInput from '../../components/AuthInput/AuthInput';
import SocialButton from '../../components/SocialButton/SocialButton';



export default AuthScreen=()=>{

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

  }

 

  return(

    <>
    <View style={styles.container}>

      <AuthInput label={loc.t(Texts.email)} onChangeText={(userEmail)=>setEmail(userEmail)} labelValue={email} keyboardType='email-address'/>

      <AuthInput label={loc.t(Texts.password)}  onChangeText={(userPassword)=>setPassword(userPassword)} labelValue={password} secureTextEntry={true}/>

      {isSignIn ? null : 
      <AuthInput label={loc.t(Texts.password)}  onChangeText={(userPassword)=>setPassword(userPassword)}  labelValue={confirmPassword} secureTextEntry={true} />}
      
      <TouchableOpacity style={styles.forgotpasswordcontainer} onPress={()=>{ForgotPassword()}}><Text style={styles.textred}>{loc.t(Texts.forgotpassword)} </Text></TouchableOpacity>
      
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