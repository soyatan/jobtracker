import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { addUserRequest, ADD_USER, FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { employeeSelector } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { useNavigation } from '@react-navigation/native';

const auth=createFBAuth();

/*
export function* addUserRequestz({payload}) {

    console.log('user',payload.user)
    const addUser={username:payload.user}

    const response=yield call(fetch,baseURL+'/users')
     const users=yield response.json();
        
   
    
    if (users.some(item=>item.username===payload.user)){
        return(
            console.log('user found')
        )
    }
    else
    try{
        yield fetch(baseURL+'/users',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(addUser)
        })
        
        //yield put(addJobr(job))
        //const data=yield response.json();
        //yield put(setJobs(data))
  
    } catch (error) {
        console.log(error)
      }
      
    
}

*/

export function* resetRequest({payload}){
    
    const {email} = payload;
    //console.log(email)
    
    try{
        
        auth.sendPasswordResetEmail(email)
        alert('email sent for reset')    
            

    } catch (error) {
        //const error_message = { code: error.code, message: error.message };
        console.log(error)
    
        //yield put({ type: AUTHENTICATION_FAILED, error: error_message });
      }
}

export function* signUpRequest ({payload}){
    
    const {email,password} = payload;
    
    try{
        
        const signUp=async (email,password)=>{
            console.log('sign-up function running');
            
            return await auth.createUserWithEmailAndPassword(email,password);
        }
        
        yield call(signUp,email, password);
        let user = auth.currentUser;
        //console.log('user',user)

        yield put(setUser(user))
    } catch (error) {
        //const error_message = { code: error.code, message: error.message };
        console.log(error)
    
        //yield put({ type: AUTHENTICATION_FAILED, error: error_message });
      }
}

export function* logoutRequest (){
    
    try{
        const logout=async ()=>{
            console.log('logout function running');
            return await auth.signOut();
        }
        yield call(logout);

        yield put(setUser(null)) 
        const navigation=useNavigation()
        yield call(navigation.navigate('Auth'))
    } catch (error) {
        //const error_message = { code: error.code, message: error.message };
        console.log(error)
    
        //yield put({ type: AUTHENTICATION_FAILED, error: error_message });
        }
    }

export function* loginRequest ({payload}){
    console.log('welcome to login request saga')
    const {email,password} = payload;
    
        
    try{
        
        const logIn=async (email,password)=>{
            console.log('sign-in function running');
        
            return await auth.signInWithEmailAndPassword(email,password);
        }
        yield call(logIn,email, password);
        let user = auth.currentUser;
        console.log('user',user)

        yield put(setUser(user))
    } catch (error) {
        //const error_message = { code: error.code, message: error.message };
        console.log(error)
    
        //yield put({ type: AUTHENTICATION_FAILED, error: error_message });
      }

}

export function* watchSignUpSaga () {
    yield takeEvery(SET_USER_REQUEST,signUpRequest);
}

export function* watchLogoutsaga () {
    yield takeEvery(LOGOUT_REQUEST,logoutRequest);
}
export function* watchLoginSaga () {
    yield takeEvery(LOGIN_REQUEST,loginRequest);
}
export function* watchForgotPWSaga () {
    yield takeEvery(FORGOT_PASSWORD,resetRequest);
}





const userSaga=[
    fork(watchSignUpSaga),
    fork(watchLogoutsaga),
    fork(watchLoginSaga),
    fork(watchForgotPWSaga)
    
];

export default userSaga;
