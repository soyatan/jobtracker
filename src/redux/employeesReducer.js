const INITIAL_STATE = [];

//selector
export const employeeSelector=state=>state.employeesState;

export const SET_EMPLOYEES='employees/set';
export const GET_EMPLOYEES='employees/get';
export const FETCH_EMPLOYEES='employees/fetch';


export const setEmployees = (users) =>{
    return{
        type: SET_EMPLOYEES,
        payload:{
            users
        }
    }
}

export const getEmployees = () =>{
    return{
        type: GET_EMPLOYEES,
      
    }
}


export const fetchEmployeesRequest = () =>{
    return{
        type: FETCH_EMPLOYEES,
    }
}

export const employeesReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_EMPLOYEES:
            if(state.some(item=>item.id===action.payload.users.id)){
                return state
            }
            else return [...state,action.payload.users];
            
    default:
        return state;
    }
}