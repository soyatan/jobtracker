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
import * as Animatable from 'react-native-animatable';

export default AuthScreen=()=>{
  const[isvalidEmail,setIsValidEmail]=useState(true)
  const[isvalidPW,setIsValidPW]=useState(true)

  const loc=useLocalization();
  const styles= useThemedStyles(getStyles)
  
  const[isSignIn,setSignIn]=useState(true);

  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[confirmPassword,setConfirmPassword]=useState();
  const dispatch = useDispatch()

  const RegisterUser = ()=>{

    if (!isvalidEmail || !isvalidPW)
    {
      alert('please enter valid email or password')
    }
    else{
    console.log('dispatching set-user-request...')
    dispatch(userSetRequest(email,password))   
  }}

  
  const SignInUser = ()=>{
    if (!isvalidEmail || !isvalidPW)
    {
      alert('please enter valid email or password')
    }
    else{
    console.log('dispatching login process.')
    dispatch(userLogInRequest(email,password))   }
  }
  const ForgotPassword = ()=>{
    console.log('remembering the password process.')
    dispatch(userForgotPassword(email))
  }
  const validateEmail=()=>{
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(String(email).toLowerCase())){

      setIsValidEmail(true)
    }
    else {
      setIsValidEmail(false)
    }}
  



const validatePW=()=>{
  if(password.length>=4){
    setIsValidPW(true)
  }
  else{
    setIsValidPW(false)
  }

  }

 

  return(

    <>
    <View style={styles.container}>

      <AuthInput validationState={isvalidEmail} setValidation={setIsValidEmail} label={loc.t(Texts.email)} onChangeText={(userEmail)=>setEmail(userEmail)} labelValue={email} keyboardType='email-address' onEndEditing={()=>validateEmail()}/>
      <Animatable.View 
      style={styles.validationcontainer}
      animation="fadeInLeft"
      duration={500}>
      {isvalidEmail? null : <Text style={styles.textred}>Please enter valid e-mail address</Text>}
      </Animatable.View>
  
      <AuthInput label={loc.t(Texts.password)}  onChangeText={(userPassword)=>setPassword(userPassword)} labelValue={password} secureTextEntry={true}  onEndEditing={()=>validatePW()}/>

      <Animatable.View 
      style={styles.validationcontainer}
      animation="fadeInLeft"
      duration={500}>
      {isvalidPW? null : <Text style={styles.textred}>Password must be 4 characters long.</Text>}
      </Animatable.View>

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