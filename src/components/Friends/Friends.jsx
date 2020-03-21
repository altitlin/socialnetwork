import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend';

import './Friends.less';

const Friends = props => {
  const { friends, follow, unfollow, setFriends } = props;

  return (
    <div className='friends'>
      {friends.map(friend =>
        <Friend
          key={friend.id}
          friend={friend}
          follow={follow}
          unfollow={unfollow}
        />
      )}
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setFriends: PropTypes.func
};

export default Friends;
