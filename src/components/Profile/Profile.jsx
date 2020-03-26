import React from 'react';
import PropTypes from 'prop-types';

import './Profile.less';

const Profile = props => {
  const { fullName, aboutMe } = props;

  return (
    <>
      <section className='section'>
        <img src='http://gambolthemes.net/workwise-new/images/resources/cover-img.jpg' className='section__logo' />
      </section>
      <section className='profile'>
        <article className='profile__user-info'>
          <div className="profile__user">
            <div>
              <img src='http://gambolthemes.net/workwise-new/images/resources/user-pro-img.png' className='profile__logo-user' />
            </div>
            <div className="profile__btns-user">
              <button className='profile__btn-user profile__btn-follow'>Follow</button>
              <button className='profile__btn-user profile__btn-hire'>Hire</button>
            </div>
            <ul className="profile__status-user">
              <li className="profile__status-following">
                <span>Following</span>
                <b>34</b>
              </li>
              <li className="profile__status-unfollowing">
                <span>Followers</span>
                <b>155</b>
              </li>
            </ul>
          </div>
        </article>
        <article className='profile__posts-user'>
          <div className='profile__user-data'>
            <h3 className='profile__user-name'>{fullName}</h3>
            <p className='profile__user-des'>{aboutMe}</p>
          </div>
        </article>
      </section>
    </>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  aboutMe: PropTypes.string,
  photos: PropTypes.object
};

export default Profile;
