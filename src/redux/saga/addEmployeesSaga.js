import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';
import { userSelector } from '../userReducer';
import { jobsReducer,fetchJobsRequest, FETCH_JOBS, setJobs, SET_JOBS } from '../jobsReducer';
import { addEmployees, employeeSelector, setEmployees } from '../employeesReducer';

import database from '@react-native-firebase/database';
import { fetchCompaniesRequest } from '../companyReducer';


export function* fetchUsersFromDb () {
    console.log('fetching users from database')
    try{
        let users = [];
        yield database().ref('/users').once('value', 
        function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey=childSnapshot.key;
                var childData=childSnapshot.val();
                let user={username:childData,id:childKey};
                users.push(user);
            })})
        console.log('succesfully fetched '+users.length+' users');
        yield put(setEmployees(users));
    } catch (error) {
        console.log(error)
      }
}


export function* checkUserInEmpList (){
    console.log('checking the user in user database')
    const curUser=yield select(userSelector);
    const curUsers=yield select(employeeSelector)
    if (curUser) {
        if (curUsers.some(item=>item.username===curUser.email)){
            console.log('user exists in employees list')}
        else{
            const newuser={username:curUser.email,id:curUser.uid}
                try{
                const newRef= database().ref('/users/'+curUser.uid)
                newRef.set(curUser.email)
                console.log(newuser,'has been added')
                
            } catch (error) {
                console.log(error)
              }
        }
    }
    yield fork(fetchUsersFromDb);
    yield put(fetchCompaniesRequest());
}


export function* watchaddEmployeesRequest () {
    yield takeLatest(SET_JOBS,checkUserInEmpList);
}


const addEmployeesSaga=[
    fork(watchaddEmployeesRequest),
];

export default addEmployeesSaga;
