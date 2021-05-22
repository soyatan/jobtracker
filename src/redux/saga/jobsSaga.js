import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';
import database from '@react-native-firebase/database';
import { fetchEmployeesRequest } from '../employeesReducer';
import { fetchUsersFromDb } from './addEmployeesSaga';

const auth=createFBAuth();

export function* fetchJobs (){
    console.log('fetching Jos Applications from database')
    try{
    let jobs = [];
    yield database().ref('/applications').once('value', 
        function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey=childSnapshot.key;
            var application={}
            var childData=childSnapshot.val();
            application={...childData,id:childKey}
            jobs.push(application);
            
           
        })})
        
        console.log('succesfully fetched '+jobs.length+ ' jobs');
        yield call(fetchUsersFromDb,)
        yield put(setJobs(jobs))
    }catch(error) {
        console.log(error)
      }

    }


  



export function* watchFetchJobsRequest () {
    
    yield takeLatest(FETCH_JOBS,fetchJobs);
    

}




const jobsSaga=[
    fork(watchFetchJobsRequest),

];

export default jobsSaga;
