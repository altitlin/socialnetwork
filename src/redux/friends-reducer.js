const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const intialState = {
  friends: [],
  pageSize: 100,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false
};

export default (state = intialState, action) => {
  const { type } = action;

  switch (type) {
  case FOLLOW: {
    const { userId } = action;

    return {
      ...state,
      friends: state.friends.map(friend => {
        return friend.id === userId
          ? {...friend, followed: true}
          : friend;
      })
    };
  }

  case UNFOLLOW: {
    const { userId } = action;

    return {
      ...state,
      friends: state.friends.map(friend => {
        return friend.id === userId
          ? {...friend, followed: false}
          : friend;
      })
    };
  }

  case SET_FRIENDS:
    return {
      ...state,
      friends: action.friends
    };

  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.currentPage
    };

  case SET_TOTAL_FRIENDS_COUNT:
    return {
      ...state,
      totalFriendsCount: action.totalFriendsCount
    };

  case TOGGLE_IS_FETCHING: {
    return {
      ...state,
      isFetching: action.isFetching
    };
  }

  default:
    return state;
  }
};

export const follow = id => ({ type: FOLLOW, userId: id });

export const unfollow = id => ({ type: UNFOLLOW, userId: id });

export const setFriends = friends => ({
  friends,
  type: SET_FRIENDS
});

export const setCurrentPage = currentPage => ({
  currentPage,
  type: SET_CURRENT_PAGE
});

export const setTotalFriendsCount = totalCount => ({
  type: SET_TOTAL_FRIENDS_COUNT,
  totalFriendsCount: totalCount
});

export const toggleIsFetching = isFetching => ({
  isFetching,
  type: TOGGLE_IS_FETCHING
});
