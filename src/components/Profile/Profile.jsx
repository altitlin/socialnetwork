import React from 'react';
import './Profile.less';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg' />
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
