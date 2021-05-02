import { all } from 'redux-saga/effects';
import companiesSaga from './companiesSaga';
import employeesSaga from './employeesSaga';
import jobsSaga from './jobsSaga';

import userSaga from './userSaga';





export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...userSaga,
        ...jobsSaga,
        ...employeesSaga,
        ...companiesSaga
    
    ])
};