
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import root from './saga/root';



import { userReducer } from './userReducer';
import { jobsReducer } from './jobsReducer';
import { LocalizationReducer } from './localizationReducer';
import { ThemeReducer } from './themeReducer';






const combinedReducer=combineReducers({
    userState:userReducer,
    jobsState:jobsReducer,
    localization:LocalizationReducer,
    theme:ThemeReducer
    
})

const sagaMiddleware=createSagaMiddleWare();
const middleWares=[sagaMiddleware]
const store=createStore(combinedReducer,applyMiddleware(...middleWares));

sagaMiddleware.run(root)

export default store;




