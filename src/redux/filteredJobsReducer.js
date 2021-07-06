const INITIAL_STATE = null;

//selector
export const filteredJobsSelector = state => state.filteredJobsState;

export const SET_FILTERED_JOBS = 'jobs/filter/set';

export const setFilteredJobs = status => {
  return {
    type: SET_FILTERED_JOBS,
    payload: {
      status,
    },
  };
};

export const filteredJobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTERED_JOBS:
      return action.payload.status;

    default:
      return state;
  }
};
