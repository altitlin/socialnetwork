import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.less';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
