const INITIAL_STATE = null;

//selector
export const userSelector=state=>state.userState;

export const SET_USER_REQUEST='user/set/request';
export const SET_USER='user/set';
export const LOGOUT_REQUEST='user/logout/request';
export const LOGIN_REQUEST='user/login/request';
export const FORGOT_PASSWORD='user/forgot/password';



export const userSetRequest = (email,password) =>{
    return{
        type: SET_USER_REQUEST,
        payload:{
            email,password}
    }
}

export const userLogoutRequest = () =>{
    return{
        type: LOGOUT_REQUEST,
       
    }
}

export const userForgotPassword = (email) =>{
    return{
        type: FORGOT_PASSWORD,
        payload:{
            email}
    }
    
}

export const userLogInRequest = (email,password)=>{
    return{
        type: LOGIN_REQUEST,
        payload:{
            email,password}
    }
}

export const setUser = (user) =>{
    return{
        type: SET_USER,
        payload:{
            user
        }
    }
}

export const userReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_USER:
            return (action.payload.user)
            
    default:
        return state;
    }
}