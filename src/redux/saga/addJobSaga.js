import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { addUserRequest, FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer, userSelector } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, ADD_JOB, ADD_JOB_REQUEST, addJobr } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';
import { employeeSelector } from '../employeesReducer';

import { addCompanyRequest, companiesSelector, fetchCompaniesRequest } from '../companyReducer';
import { fetchCompanies } from './companiesSaga';
import { fetchJobs } from './jobsSaga';

const auth=createFBAuth();




export function* addJob (action,companies){

const job=action.job
const companyname=action.companyname

    
   
    const curcompany=companies.find(item=>item.name===companyname)
    

    
    const newjob={...job,companyId:curcompany.id}
    //console.log(newjob) 

    
    
    try{
        yield call(fetch,baseURL+'/applications',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newjob)
        })
        
        //yield put(addJobr(job))
        //const data=yield response.json();
        //yield put(setJobs(data))
        //yield put(addJobr(newjob))
        console.log('new job added',newjob)
        yield call(fetchJobs,)
       
    } catch (error) {
        console.log(error)
      }
      
    }

export function* checkCompanyInCompList (payload){
    
    
    const companies=yield select(companiesSelector)
    //console.log(company)
    //console.log('current user is',curUser)
    //console.log('current users are',curUsers)
    
    if (companies) {
        if (companies.some(item=>item.name===payload)){
            console.log('company exists in companies list')
        }
        else{
            const newcompany={name:payload}
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
       yield call(fetchCompanies,)
    
    }
            
    
export function* jobgeldifirmaekle ({payload}){
    
    //    yield put(addCompanyRequest(payload.companyname))
    yield call(checkCompanyInCompList,payload.companyname)
    const companies=yield select(companiesSelector)
    yield call(addJob,payload,companies)
}



export function* watchAddJobRequest () {
    yield takeLatest(ADD_JOB_REQUEST,jobgeldifirmaekle);
   
    
   

    //yield call(addJob,payload.job,payload.companyname);

  

}




const addJobSaga=[
    fork(watchAddJobRequest),

];

export default addJobSaga;
