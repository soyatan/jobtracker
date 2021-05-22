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
import database from '@react-native-firebase/database';
const auth=createFBAuth();

export function* addJob (action,companies){
    
    const job=action.job
    const companyname=action.companyname
    const curcompany=companies.find(item=>item.name===companyname)
    const appdateStr=job.appdate.toISOString();
    const newjob={...job,companyId:curcompany.id,appdate:appdateStr}
    
    try{
        const newRef= yield database().ref('/applications').push(newjob)
            
        const newMeetingRef= yield database().ref('/applications/'+newRef.key+'/meetings').set(action.meetings)
        console.log(newjob,'has been added to jobs database')
        yield call(fetchJobs,)
    } catch (error) {
        console.log(error)
      }
    }

    export function* checkCompanyInCompList (payload){
    const companies=yield select(companiesSelector)
    console.log('check company',payload)
    if (companies) {
        if (companies.some(item=>item.name===payload)){
            console.log('company exists in companies list')
        }
        else{
            try{
                const newRef= database().ref('/companies')
                newRef.push(payload)
                console.log(payload,'has been added to companies database')
            } catch (error) {
                console.log(error)
                }
            }}
       yield call(fetchCompanies,)
    }
            
export function* addCompanyByNewJob ({payload}){
    yield call(checkCompanyInCompList,payload.companyname)
    const companies=yield select(companiesSelector)
    yield call(addJob,payload,companies)
}

export function* watchAddJobRequest () {
    yield takeLatest(ADD_JOB_REQUEST,addCompanyByNewJob);
}

const addJobSaga=[
    fork(watchAddJobRequest),
];

export default addJobSaga;
