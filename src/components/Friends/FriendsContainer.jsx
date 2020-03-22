import { connect } from 'react-redux';
import Friends from './Friends';
import {
  followCreator,
  unfollowCreator,
  setFriendsCreator,
  setCurrentPageCreator,
  setTotalFriendsCountCreator
} from '../../redux/friends-reducer';

const mapStateToProps = state => ({
  ...state.friendsPage,
  pageSize: state.friendsPage.pageSize,
  totalFriendsCount: state.friendsPage.totalFriendsCount,
  currentPage: state.friendsPage.currentPage
});

const mapDispathToProps = dispatch => {
  return {
    follow: id => dispatch(followCreator(id)),
    unfollow: id => dispatch(unfollowCreator(id)),
    setFriends: users => dispatch(setFriendsCreator(users)),
    setTotalFriendsCount: totalCount => dispatch(setTotalFriendsCountCreator(totalCount)),
    setCurrentPage: currentPage => dispatch(setCurrentPageCreator(currentPage))
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispathToProps)(Friends);

export default FriendsContainer;
