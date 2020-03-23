import { connect } from 'react-redux';
import Posts from './Posts';
import {
  addPost,
  updateNewPost
} from '../../../redux/profile-reducer';

const mapStateToProps = state => ({ ...state.profilePage });

const mapDispathToProps = {
  addPost,
  updateNewPost
};

export default connect(mapStateToProps, mapDispathToProps)(Posts);
