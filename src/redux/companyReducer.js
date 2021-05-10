const INITIAL_STATE = [];

//selector
export const companiesSelector=state=>state.companiesState;

export const SET_COMPANIES='companies/set';
export const ADD_COMPANY='companies/add';
export const ADD_COMPANY_REQUEST='companies/add/request';
export const FETCH_COMPANIES='companies/fetch';


export const setComapnies = (companies) =>{
    return{
        type: SET_COMPANIES,
        payload:{
            companies
        }
    }
}

export const addCompanyRequest=(companyname)=>{
    return{
        type: ADD_COMPANY_REQUEST,
        payload:{
            companyname
        }
    }
}


export const addCompany = (company) =>{
    return{
        type: ADD_COMPANY,
        payload:{
            company
        }
    }
}

export const fetchCompaniesRequest = () =>{
    return{
        type: FETCH_COMPANIES,
    }
}

export const companiesReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_COMPANIES:
            
                return action.payload.companies
           
            
    default:
        return state;
    }
}