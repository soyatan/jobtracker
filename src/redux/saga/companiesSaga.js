import { takeEvery, fork, select, put, take, apply, delay, call, race, all, effectTypes, takeLatest } from 'redux-saga/effects';

import { FETCH_COMPANIES, setCompanies } from '../companyReducer';


import database from '@react-native-firebase/database';

export function* fetchCompanies (){

    console.log('fetching Companies from database')


    try{

        let companies = [];
        yield database().ref('/companies').once('value', 
        function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey=childSnapshot.key;
                var childData=childSnapshot.val();
                company={name:childData,id:childKey}
                companies.push(company);
            })})
        console.log('succesfully fetched '+companies.length+' companies');
        yield put(setCompanies(companies));
    } catch (error) {
        console.log(error)
      }
}

export function* watchCompaniesRequest () {
    yield takeEvery(FETCH_COMPANIES,fetchCompanies)
 
}




const companiesSaga=[
    fork(watchCompaniesRequest),

];

export default companiesSaga;
