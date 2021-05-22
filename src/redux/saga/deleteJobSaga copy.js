import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, ADD_JOB, ADD_JOB_REQUEST, addJobr, DELETE_JOB_REQUEST, deleteJob } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';
import database from '@react-native-firebase/database';
const auth=createFBAuth();




export function* delJob ({payload}){
    
    try{
        console.log('passing a delete for the item id',payload.id)
        yield database().ref('/applications/'+payload.id).remove()
        yield put(deleteJob(payload.id))
    } catch (error) {
        console.log(error)
      }
}
export function* watchDeleteJobRequest () {
    yield takeLatest(DELETE_JOB_REQUEST,delJob);
}

const deleteJobSaga=[
    fork(watchDeleteJobRequest),
];

export default deleteJobSaga;
