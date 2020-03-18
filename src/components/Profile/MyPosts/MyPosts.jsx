import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';
import './MyPosts.less';

const MyPosts = props => {
  const { posts } = props;

  return (
    <div className='posts-block'>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className='posts-block__posts'>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.array
};

export default MyPosts;
