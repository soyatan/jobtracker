const INITIAL_STATE = [];

//selector
export const employeeSelector=state=>state.employeesState;

export const SET_EMPLOYEES='employees/set';
export const GET_EMPLOYEES='employees/get';
export const ADD_EMPLOYEES='employees/add';
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

export const addEmployees = (email) =>{
    return{
        type: ADD_EMPLOYEES,
        payload:{
            email
        }
      
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
            const newState=action.payload.users
            return newState          
      
            
            
    default:
        return state;
    }
}