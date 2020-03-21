import React from 'react';
import PropTypes from 'prop-types';

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
      <img src={ava} className='friend__logo' />
      <h3 className='friend__name'>{name}</h3>
      <h4 className='friend__location'>
        {`${location.city} ${location.country}`}
      </h4>
      <div className="friend__btns">
        {followed
          ? <button className='friend__btn friend__btn-follow' onClick={onUnfollow}>Unfollow</button>
          : <button className='friend__btn friend__btn-follow' onClick={onFollow}>Follow</button>
        }
        <button className='friend__btn friend__btn-msg'>Message</button>
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
