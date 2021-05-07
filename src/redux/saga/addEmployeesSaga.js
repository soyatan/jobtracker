import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer, userSelector } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { employeeSelector, setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { SET_EMPLOYEEFETCHSTATUS } from '../employeesFetchReducer';



export function* checkUserInEmpList (){
  
    const curUser=yield select(userSelector);
    const curUsers=yield select(employeeSelector)
    console.log('current user is',curUser)
    console.log('current users are',curUsers)
    if (curUser) {
        if (curUsers.some(item=>item.username===curUser.email)){
            console.log('user exists in employees list')}
        else{
            const newuser={username:curUser.email}
            try{
                yield fetch(baseURL+'/users',{
                    method:'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(newuser)
                })
                
                //yield put(addJobr(job))
                //const data=yield response.json();
                //yield put(setJobs(data))
                
            } catch (error) {
                console.log(error)
              }
              
        }
        
    }

    /*
    try{
        const response=yield call(fetch,baseURL+'/users/'+userId)
        const data=yield response.json();
        //console.log('user is',data)
        yield put(setEmployees(data))

    } catch (error) {
        console.log(error)
      }
      */
}


export function* watchaddEmployeesRequest () {
    const {payload}=yield take(SET_EMPLOYEEFETCHSTATUS);
    
    if (payload.status==='isfetched'){
    yield call(checkUserInEmpList)}
    
    
    
}




const addEmployeesSaga=[
    fork(watchaddEmployeesRequest),

];

export default addEmployeesSaga;
