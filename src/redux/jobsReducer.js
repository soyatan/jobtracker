const INITIAL_STATE = [];

//selector
export const jobsSelector = state => state.jobsState;

export const SET_JOBS = 'jobs/set';
export const ADD_JOB = 'jobs/add';
export const ADD_JOB_REQUEST = 'jobs/add/request';
export const UPDATE_JOB_REQUEST = 'jobs/update/request';
export const DELETE_JOB_REQUEST = 'jobs/delete/request';
export const FETCH_JOBS = 'jobs/fetch';
export const DELETE_JOB = 'jobs/delete';

export const setJobs = jobs => {
  return {
    type: SET_JOBS,
    payload: {
      jobs,
    },
  };
};

export const addJobRequest = (job, companyname, meetings) => {
  return {
    type: ADD_JOB_REQUEST,
    payload: {
      job,
      companyname,
      meetings,
    },
  };
};

export const updateJobRequest = (job, companyname, id, meetings) => {
  return {
    type: UPDATE_JOB_REQUEST,
    payload: {
      job,
      companyname,
      id,
      meetings,
    },
  };
};

export const deleteJobRequest = id => {
  return {
    type: DELETE_JOB_REQUEST,
    payload: {
      id,
    },
  };
};

export const addJobr = job => {
  return {
    type: ADD_JOB,
    payload: {
      job,
    },
  };
};

export const fetchJobsRequest = () => {
  return {
    type: FETCH_JOBS,
  };
};

export const deleteJob = id => {
  return {
    type: DELETE_JOB,
    payload: {
      id,
    },
  };
};

export const jobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.payload.jobs;
    case ADD_JOB:
      const newAddedState = [...state, action.payload.job];
      return newAddedState;
    case DELETE_JOB:
      const newState = state.filter(item => item.id !== action.payload.id);
      return newState;

    default:
      return state;
  }
};
