import React from 'react';
import './MyPosts.less';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='Hi, how are you?' />
        <Post message='It is my first post' />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
