const INITIAL_STATE = null;

//selector
export const jobsSelector=state=>state.jobsState;

export const SET_JOBS='jobs/set';
export const FETCH_JOBS='jobs/fetch';


export const setJobs = (jobs) =>{
    return{
        type: SET_JOBS,
        payload:{
            jobs
        }
    }
}



export const fetchJobsRequest = () =>{
    return{
        type: FETCH_JOBS,
    }
}

export const jobsReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_JOBS:
            return action.payload.jobs;
            
    default:
        return state;
    }
}