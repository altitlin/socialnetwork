const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_PROFILE:
    return { ...state, profile: action.profile };

  default: return state;
  }
};

export const setFriendProfile = profile => ({
  profile,
  type: SET_USER_PROFILE
});
