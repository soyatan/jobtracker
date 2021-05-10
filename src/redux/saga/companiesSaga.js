import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { FETCH_COMPANIES, setComapnies } from '../companyReducer';




export function* fetchCompanies (){
    
    //console.log('welcome to fetchcompanies');
    //console.log('companyId geldi', companyId)

    console.log('fetchcompany02')
    try{
        const response=yield call(fetch,baseURL+'/companies')
        console.log('fetchcompany03')
        const data=yield response.json();
        //console.log('user is',data)
        yield put(setComapnies(data))
        console.log('companies fetched and set')

    } catch (error) {
        console.log(error)
      }
}


export function* watchCompaniesRequest () {
    yield takeEvery(FETCH_COMPANIES,fetchCompanies)
    
    
    //yield call(fetchCompanies);
    
    
}




const companiesSaga=[
    fork(watchCompaniesRequest),

];

export default companiesSaga;
