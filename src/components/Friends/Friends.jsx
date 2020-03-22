import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import Friend from './Friend/Friend';

import './Friends.less';

class Friends extends Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        const { items, totalCount } = res.data;
        const { setFriends, setTotalFriendsCount } = this.props;

        setFriends(items);
        setTotalFriendsCount(totalCount);
      });
  }

  onPageChanged = pageNumber => {
    const { pageSize } = this.props;

    this.props.setCurrentPage(pageNumber);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then(res => this.props.setFriends(res.data.items));
  }

  render() {
    const {
      friends,
      pageSize,
      totalFriendsCount,
      currentPage,
      follow,
      unfollow
    } = this.props;

    const pagesCount = Math.ceil(totalFriendsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className='friends'>
        <div className='friends__pages'>
          {pages.map((page, i) => (
            <span
              key={i}
              className={currentPage === page ? 'friends__page_selected' : 'friends__page'}
              onClick={() => this.onPageChanged(page)}
            >
              {page}
            </span>
          )
          )}
        </div>
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
  }
}

Friends.propTypes = {
  friends: PropTypes.array,
  pageSize: PropTypes.number,
  totalFriendsCount: PropTypes.number,
  currentPage: PropTypes.number,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setFriends: PropTypes.func,
  setTotalFriendsCount: PropTypes.func,
  setCurrentPage: PropTypes.func
};

export default Friends;
