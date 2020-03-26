import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import userPhoto from '../../../assets/images/user.png';

import './Friend.less';

const Friend = props => {
  const {
    friend: { id, name, ava, location, followed },
    follow,
    unfollow
  } = props;

  const onFollow = () => follow(id);;
  const onUnfollow = () => unfollow(id);

  return (
    <div className='friend'>
      <NavLink to={`/profile/${id}`}>
        <img src={ava ? ava : userPhoto} className='friend__logo' />
      </NavLink>
      <h3 className='friend__name'>{name}</h3>
      <h4 className='friend__location'>
        City Country
      </h4>
      <div className="friend__btns">
        {followed
          ? <button className='friend__btn friend__btn-follow' onClick={onUnfollow}>Unfollow</button>
          : <button className='friend__btn friend__btn-follow' onClick={onFollow}>Follow</button>
        }
        <button className='friend__btn friend__btn-msg'>&#128386;</button>
      </div>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.object,
  follow: PropTypes.func,
  unfollow: PropTypes.func
};

export default Friend;
