import React from 'react';
import './ProfileInfo.less';

const ProfileInfo = props => {
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
      </div>
    </div>
  );
};

export default ProfileInfo;
