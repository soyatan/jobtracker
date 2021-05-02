import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { setEmployees } from '../employeesReducer';
import { baseURL } from '../../API/jobsURL';
import { setComapnies } from '../companyReducer';




export function* fetchCompanies (companyId){
    
    console.log('welcome to fetchcompanies');
    console.log('companyId geldi', companyId)

    
    try{
        const response=yield call(fetch,baseURL+'/companies/'+companyId)
        const data=yield response.json();
        //console.log('user is',data)
        yield put(setComapnies(data))

    } catch (error) {
        console.log(error)
      }
}


export function* watchCompaniesRequest () {
    const [jobs]=yield all ([take(SET_JOBS)]);;
    //console.log('jobs',jobs)
    yield all(jobs.payload.jobs.map(item=>fork(fetchCompanies,item.companyId)));
    
    
}




const companiesSaga=[
    fork(watchCompaniesRequest),

];

export default companiesSaga;
