import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend';

import './Friends.less';

const Friends = props => {
  const {
    totalFriendsCount,
    pageSize,
    currentPage,
    friends,
    onPageChanged,
    follow,
    unfollow
  } = props;

  const pagesCount = Math.ceil(totalFriendsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
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
      <div className='friends__pages'>
        {pages.map((page, i) => (
          <span
            key={i}
            className={currentPage === page ? 'friends__page friends__page_selected' : 'friends__page'}
            onClick={() => onPageChanged(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </>
  );
};

Friends.propTypes = {
  totalFriendsCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  friends: PropTypes.array,
  onPageChanged: PropTypes.func,
  follow: PropTypes.func,
  unfollow: PropTypes.func
};

export default Friends;
