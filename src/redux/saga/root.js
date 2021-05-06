import { all } from 'redux-saga/effects';
import addJobSaga from './addJobSaga';
import companiesSaga from './companiesSaga';
import deleteJobSaga from './deleteJobSaga copy';
import employeesSaga from './employeesSaga';
import jobsSaga from './jobsSaga';

import userSaga from './userSaga';





export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...userSaga,
        ...jobsSaga,
        ...employeesSaga,
        ...companiesSaga,
        ...addJobSaga,
        ...deleteJobSaga
    
    ])
};