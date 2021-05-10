import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { setEmployeesFetchStatus } from '../employeesFetchReducer';
import { fetchCompaniesRequest } from '../companyReducer';

const auth=createFBAuth();


export function* josSetandThenWhat(action){
    //console.log(action.payload.jobs)
    yield call(fetchUsers,)
    yield put(fetchCompaniesRequest())
    
}
export function* fetchUsers (){
    
    //console.log('welcome to fetchusers');
    //console.log('userId geldi', userId)
    console.log('fetchemployee02')
    
    try{
        const response=yield call(fetch,baseURL+'/users/')
        console.log('fetchemployee03')
        const data=yield apply(response,response.json);
        //console.log('users are',data)
        console.log('fetchemployee04')
        yield put(setEmployees(data))
        console.log('employees fetched and set to redux')
        yield put(setEmployeesFetchStatus('isfetched'))
        

    } catch (error) {
        console.log(error)
      }
}


export function* watchEmployeesRequest () {
    yield takeLatest(SET_JOBS,josSetandThenWhat);
    //console.log('jobs',jobs)
    console.log('fetchemployee01')

    
    
}




const employeesSaga=[
    fork(watchEmployeesRequest),

];

export default employeesSaga;
