const INITIAL_STATE = ('isfetching');

//selector
export const employeeFetchSelector=state=>state.employeesFetchState;

export const SET_EMPLOYEEFETCHSTATUS='employeesfetch/set';



export const setEmployeesFetchStatus = (status) =>{
    return{
        type: SET_EMPLOYEEFETCHSTATUS,
        payload:{
            status
        }
    }
}


export const employeesFetchReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_EMPLOYEEFETCHSTATUS:
         return action.payload.status
    default:
        return state;
    }
}