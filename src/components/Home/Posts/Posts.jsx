import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';

import './Posts.less';

const Posts = props => {
  const { posts, newPostText, updateNewPost, addPost } = props;

  const onAddPost = event => {
    if (event.key === 'Enter') {
      addPost();
    }
  };

  const onPostChange = e => updateNewPost(e.target.value);

  return (
    <div className='profile__posts'>
      <div className="profile__new-post">
        <img
          className='profile__user-ava'
          src='http://gambolthemes.net/workwise-new/images/resources/user-pic.png'
        />
        <input
          type='text'
          value={newPostText}
          name="new-post"
          id="new-post"
          onKeyPress={onAddPost}
          onChange={onPostChange}
          className='profile__post-des'
          placeholder="What's new?"
        />
      </div>
      <div className='posts-block__posts'>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  newPostText: PropTypes.string,
  updateNewPost: PropTypes.func,
  addPost: PropTypes.func
};

export default Posts;
