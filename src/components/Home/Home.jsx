import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserInfo from './UserInfo/UserInfo';

import './Home.less';

const Home = () => {
  return (
    <div className='home'>
      <UserInfo />
      <PostsContainer />
    </div>
  );
};

export default Home;
