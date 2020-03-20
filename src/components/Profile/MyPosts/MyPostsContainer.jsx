import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import {
  addPostCreator,
  updateNewPostTeactCreator
} from '../../../redux/profile-reducer';

const mapStateToProps = state => ({ ...state.profilePage });

const mapDispathToProps = dispatch => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: text => dispatch(updateNewPostTeactCreator(text))
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;
