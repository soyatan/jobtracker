
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import root from './saga/root';
import REDUX_PERSIST from './ReduxPersistConfig';
import {persistStore,persistReducer} from 'redux-persist'


import { userReducer } from './userReducer';
import { jobsReducer } from './jobsReducer';
import { LocalizationReducer } from './localizationReducer';
import { ThemeReducer } from './themeReducer';
import { employeesReducer } from './employeesReducer';
import { companiesReducer } from './companyReducer';





const combinedReducer=combineReducers({
    userState:userReducer,
    jobsState:jobsReducer,
    localization:LocalizationReducer,
    theme:ThemeReducer,
    employeesState:employeesReducer,
    companiesState:companiesReducer
    
})
let persistedReducer=combinedReducer;
if(REDUX_PERSIST.active){
    const persistConfig=REDUX_PERSIST.storeConfig;
    persistedReducer=persistReducer(persistConfig, combinedReducer);
}

const sagaMiddleware=createSagaMiddleWare();
const middleWares=[sagaMiddleware]
const store=createStore(persistedReducer,applyMiddleware(...middleWares));
const persistor=persistStore(store)

sagaMiddleware.run(root)

export const storey=()=>{
    return {store,persistor};
}



