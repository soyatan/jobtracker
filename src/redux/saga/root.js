import { all } from 'redux-saga/effects';

import addEmployeesSaga from './addEmployeesSaga.js';
import addJobSaga from './addJobSaga';
import companiesSaga from './companiesSaga';
import deleteJobSaga from './deleteJobSaga copy';

import jobsSaga from './jobsSaga';
import updateJobSaga from './updateJobSaga.js';

import userSaga from './userSaga';





export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...userSaga,
        ...jobsSaga,
        
        ...companiesSaga,
        ...addJobSaga,
        ...deleteJobSaga,
        ...addEmployeesSaga,
     
        ...updateJobSaga
        
    
    ])
};