import React from 'react';
import './UserInfo.less';

const UserInfo = () => {
  return (
    <div className='profile__user-info'>
      <div className='profile__user-profile'>
        <div className='profile__user-dt'>
          <img className='profile__user-img' src='http://gambolthemes.net/workwise-new/images/resources/user-pic.png' />
        </div>
        <div className='profile__user-specs'>
          <h3 className='profile__user-name'>Sasha Titov</h3>
          <span className='profile__user-des'>Junior Frontend Developer</span>
        </div>
        <ul className='profile__user-status'>
          <li>
            <h4>Following</h4>
            <span>34</span>
          </li>
          <li>
            <h4>Followers</h4>
            <span>155</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
