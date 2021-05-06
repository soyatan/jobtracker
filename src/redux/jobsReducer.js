const INITIAL_STATE = null;

//selector
export const jobsSelector=state=>state.jobsState;

export const SET_JOBS='jobs/set';
export const ADD_JOB='jobs/add';
export const ADD_JOB_REQUEST='jobs/add/request';
export const DELETE_JOB_REQUEST='jobs/delete/request';
export const FETCH_JOBS='jobs/fetch';


export const setJobs = (jobs) =>{
    return{
        type: SET_JOBS,
        payload:{
            jobs
        }
    }
}

export const addJobRequest = (job) =>{
    return{
        type: ADD_JOB_REQUEST,
        payload:{
            job
        }
    }
}


export const deleteJobRequest = (id) =>{
    return{
        type: DELETE_JOB_REQUEST,
        payload:{
            id
        }
    }
}

export const addJobr = (job) =>{
    return{
        type: ADD_JOB,
        payload:{
            job
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
        case ADD_JOB:
            return [...state,action.payload.job];
            
    default:
        return state;
    }
}