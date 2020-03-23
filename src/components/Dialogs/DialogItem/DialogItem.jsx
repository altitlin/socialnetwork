import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './DialogItem.less';

const DialogItem = props => {
  const { id, name, ava } = props.dialog;

  return (
    <div className='dialogs__item'>
      <NavLink to={`/dialogs/${id}`} className='link dialogs__item-link'>
        <div className='dialogs__details'>
          <div className='dialogs__user-img'>
            <img src={ava} />
          </div>
          <div className='dialogs__user-info'>
            <h3 className='dialogs__username'>{name}</h3>
            <p className='dialogs__msg'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

DialogItem.propTypes = {
  dialog: PropTypes.object
};

export default DialogItem;
