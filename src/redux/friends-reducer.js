const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';

const intialState = {
  friends: [
    { id: 1, followed: true, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Moscow' } },
    { id: 2, followed: false, name: 'Pasha', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Ryazan' } },
    { id: 3, followed: false, name: 'Maxim', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Piter'  } },
    { id: 4, followed: true, name: 'Alex', ava: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png', location: { city: 'Russia', country: 'Samara'  } }
  ]
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
      friends: [...state.friends, ...action.friends]
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
