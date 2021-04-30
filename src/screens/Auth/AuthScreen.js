import React, { useState } from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import SocialButton from '../../components/SocialButton'
import styles from './styles'
import auth from '@react-native-firebase/auth';

import { userForgotPassword, userLogInRequest, userSetRequest } from '../../redux/userReducer'
import { useDispatch } from 'react-redux'

export default AuthScreen=()=>{
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
  


  return(

    <>
    <View style={styles.container}>

      <AuthInput label='Email' onChangeText={(userEmail)=>setEmail(userEmail)} labelValue={email} keyboardType='email-address'/>

      <AuthInput label='Password' onChangeText={(userPassword)=>setPassword(userPassword)} labelValue={password} secureTextEntry={true}/>

      {isSignIn ? null : 
      <AuthInput label='Password again...' onChangeText={(userPassword)=>setPassword(userPassword)}  labelValue={confirmPassword} secureTextEntry={true} />}
      
      <TouchableOpacity style={styles.passwordtextcontainer} onPress={()=>{ForgotPassword()}}><Text style={styles.text1}>Forgot Password?</Text></TouchableOpacity>
      
      <AuthButton label={isSignIn ? 'SIGN IN' : 'SIGN UP'} onPress={()=>{isSignIn? SignInUser() : RegisterUser()}}/>

      <AuthButton label={isSignIn ? 'SIGN UP' : 'SIGN IN'} onPress={()=>{isSignIn? setSignIn(false) : setSignIn(true) }} />
      
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