import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD, LOGIN_REQUEST, LOGOUT_REQUEST, setUser, SET_USER, SET_USER_REQUEST, userForgotPassword, userReducer } from '../userReducer';
import firebase from '@react-native-firebase/app';  
import createFBAuth from "@react-native-firebase/auth";
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs } from '../jobsReducer';
import { baseURL } from '../../API/jobsURL';

const auth=createFBAuth();



export function* fetchJobs (){
    console.log('fetch01')
    
    
    try{
        const response=yield call(fetch,baseURL+'/applications')
        console.log('fetch02')
        const data=yield apply(response,response.json);
        console.log('fetch03')
        //console.log('succesfully fetched jobs')
        yield put(setJobs(data))
        console.log('fetchjobs completed and set them into redux.')
        //console.log('succesfully placed jobs in redux')
    } catch (error) {
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
