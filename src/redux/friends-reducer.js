const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';

const intialState = {
  friends: [],
  pageSize: 3,
  totalFriendsCount: 0,
  currentPage: 1
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

  default:
    return state;
  }
};

export const followCreator = id => ({ type: FOLLOW, userId: id });

export const unfollowCreator = id => ({ type: UNFOLLOW, userId: id });

export const setFriendsCreator = friends => ({
  friends,
  type: SET_FRIENDS
});

export const setCurrentPageCreator = currentPage => ({
  currentPage,
  type: SET_CURRENT_PAGE
});

export const setTotalFriendsCountCreator = totalCount => ({
  type: SET_TOTAL_FRIENDS_COUNT,
  totalFriendsCount: totalCount
});
