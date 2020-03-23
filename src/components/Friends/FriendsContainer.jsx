import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import Friends from './Friends';
import Preloader from '../Preloader/Preloader';
import {
  follow,
  unfollow,
  setFriends,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching
} from '../../redux/friends-reducer';


class FriendsContainer extends Component {
  componentDidMount() {
    const { currentPage, pageSize, toggleIsFetching } = this.props;

    toggleIsFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
        const { items, totalCount } = res.data;
        const { setFriends, setTotalFriendsCount } = this.props;

        setFriends(items);
        setTotalFriendsCount(totalCount);
        toggleIsFetching(false)
      });
  }

  onPageChanged = pageNumber => {
    const {
      pageSize,
      setCurrentPage,
      setFriends,
      toggleIsFetching
    } = this.props;

    setCurrentPage(pageNumber);
    toggleIsFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then(res => {
        setFriends(res.data.items);
        toggleIsFetching(false);
      });
  }

  render() {
    const {
      totalFriendsCount,
      pageSize,
      currentPage,
      isFetching,
      friends,
      follow,
      unfollow
    } = this.props;

    return (
      <>
        {isFetching && <Preloader />}
        <Friends
          totalFriendsCount={totalFriendsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          friends={friends}
          onPageChanged={this.onPageChanged}
          follow={follow}
          unfollow={unfollow}
        />
      </>
    );
  }
}

FriendsContainer.propTypes = {
  friends: PropTypes.array,
  pageSize: PropTypes.number,
  totalFriendsCount: PropTypes.number,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setFriends: PropTypes.func,
  setTotalFriendsCount: PropTypes.func,
  setCurrentPage: PropTypes.func
};

const mapStateToProps = state => ({
  ...state.friendsPage,
  pageSize: state.friendsPage.pageSize,
  totalFriendsCount: state.friendsPage.totalFriendsCount,
  currentPage: state.friendsPage.currentPage,
  isFetching: state.friendsPage.isFetching
});

const mapDispathToProps = {
  follow,
  unfollow,
  setFriends,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching
};

export default connect(mapStateToProps, mapDispathToProps)(FriendsContainer);
