const INITIAL_STATE = 'http://e52a0b6d6a81.ngrok.io';

//selector
export const linkSelector = state => state.linkState;

export const SET_LINK = 'link/set';

export const setNgrokLink = link => {
  return {
    type: SET_LINK,
    payload: {
      link,
    },
  };
};
export const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LINK:
      return action.payload.link;

    default:
      return state;
  }
};
