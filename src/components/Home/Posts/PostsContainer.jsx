import { connect } from 'react-redux';
import Posts from './Posts';
import {
  addPost,
  updateNewPost
} from '../../../redux/home-reducer';

const mapStateToProps = state => ({ ...state.homePage });

const mapDispathToProps = {
  addPost,
  updateNewPost
};

export default connect(mapStateToProps, mapDispathToProps)(Posts);
