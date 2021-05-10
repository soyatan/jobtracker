import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest, spawn } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS, ADD_JOB, ADD_JOB_REQUEST, addJobRequest } from '../jobsReducer';
import { setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { ADD_COMPANY_REQUEST, companiesSelector, setComapnies } from '../companyReducer';


export function* checkCompanyInCompList ({payload}){
    //console.log('SICACIK FİRMA',payload)
    
    const companies=yield select(companiesSelector)
    //console.log(company)
    //console.log('current user is',curUser)
    //console.log('current users are',curUsers)
    
    if (companies) {
        if (companies.some(item=>item.name===payload.companyname)){
           console.log('company exists in companies list')
        }
        else{
            const newcompany={name:payload.companyname}
            try{
                yield fetch(baseURL+'/companies',{
                    method:'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(newcompany)
                })
                
                //yield put(addEmployees(curUser.email))
                //const data=yield response.json();
                //yield put(setJobs(data))
              console.log(newcompany,'has been added')
            } catch (error) {
                console.log(error)
              }

            }}

    
    }
        



export function* watchaddCompanyRequest () {
    yield takeLatest(ADD_COMPANY_REQUEST,checkCompanyInCompList);
  
    //yield call(checkCompanyInCompList,payload)
    //yield put(addJobRequest(payload));
    
    
    
}




const addCompanySaga=[
    fork(watchaddCompanyRequest),

];

export default addCompanySaga;
