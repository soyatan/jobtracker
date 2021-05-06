import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { addUserRequest, FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer, userSelector } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, ADD_JOB, ADD_JOB_REQUEST, addJobr } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';
import { employeeSelector } from '../employeesReducer';

const auth=createFBAuth();




export function* addJob ({job}){
    
   
    
    console.log('u wanted to add shit.')
    //console.log(job)
    
    
    try{
        yield fetch(baseURL+'/applications',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(job)
        })
        
        //yield put(addJobr(job))
        //const data=yield response.json();
        //yield put(setJobs(data))
        
    } catch (error) {
        console.log(error)
      }
      yield put(fetchJobsRequest())
     
}

export function* addUserRequestz(user) {

    console.log('user',user)
    const addUser={username:user}
    const users=yield select(employeeSelector);
    if (users.some(item=>item.username===user)){
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



export function* watchAddJobRequest () {
    const {payload}=yield take(ADD_JOB_REQUEST,addJob);
    console.log(payload)
    yield all([
        call(addJob,payload),
        call(addUserRequestz,payload.job.user) ])
    

}




const addJobSaga=[
    fork(watchAddJobRequest),

];

export default addJobSaga;
