import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';

const auth=createFBAuth();



export function* fetchUsers (userId){
    
    console.log('welcome to fetchusers');
    console.log('userId geldi', userId)

    
    try{
        const response=yield call(fetch,baseURL+'/users/'+userId)
        const data=yield response.json();
        //console.log('user is',data)
        yield put(setEmployees(data))

    } catch (error) {
        console.log(error)
      }
}


export function* watchEmployeesRequest () {
    const [jobs]=yield all ([take(SET_JOBS)]);;
    //console.log('jobs',jobs)
    yield all(jobs.payload.jobs.map(item=>fork(fetchUsers,item.userId)));
    
    
}




const employeesSaga=[
    fork(watchEmployeesRequest),

];

export default employeesSaga;
