const INITIAL_STATE = [];

//selector
export const companiesSelector=state=>state.companiesState;

export const SET_COMPANIES='companies/set';
export const FETCH_COMPANIES='companies/fetch';


export const setComapnies = (companies) =>{
    return{
        type: SET_COMPANIES,
        payload:{
            companies
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
            if(state.some(item=>item.id===action.payload.companies.id)){
                return state
            }
            else return [...state,action.payload.companies];
            
    default:
        return state;
    }
}