import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, ADD_JOB, ADD_JOB_REQUEST, addJobr, DELETE_JOB_REQUEST } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';

const auth=createFBAuth();




export function* delJob ({payload}){
    
    
    
    
    try{
        yield fetch(baseURL+'/applications'+'/'+payload.id,{
            method:'DELETE'
        })
        
        //yield put(addJobr(job))
        //const data=yield response.json();
        //yield put(setJobs(data))
        
    } catch (error) {
        console.log(error)
      }
      yield put(fetchJobsRequest())
     
}


export function* watchDeleteJobRequest () {
    yield takeEvery(DELETE_JOB_REQUEST,delJob);
    //yield call(delJob,payload)
    

}




const deleteJobSaga=[
    fork(watchDeleteJobRequest),

];

export default deleteJobSaga;
