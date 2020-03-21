import { connect } from 'react-redux';
import Friends from './Friends';
import {
  followCreator,
  unfollowCreator,
  setFriendsCreator
} from '../../redux/friends-reducer';

const mapStateToProps = state => ({ ...state.friendsPage });

const mapDispathToProps = dispatch => {
  return {
    follow: id => dispatch(followCreator(id)),
    unfollow: id => dispatch(unfollowCreator(id)),
    setFriends: users => dispatch(setFriendsCreator(users))
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispathToProps)(Friends);

export default FriendsContainer;
