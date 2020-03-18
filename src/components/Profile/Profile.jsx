import React from 'react';
import PropTypes from 'prop-types';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.less';

const Profile = props => {
  const { date } = props;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={date.posts} />
    </div>
  );
};

Profile.propTypes = {
  date: PropTypes.object
};

export default Profile;
