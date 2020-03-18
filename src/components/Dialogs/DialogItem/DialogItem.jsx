import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DialogItem.less';

const DialogItem = props => {
  const { id, name } = props.dialog;

  return (
    <div className='dialogs__item dialogs__item_active'>
      <NavLink to={`/dialogs/${id}`} className='link'>{name}</NavLink>
    </div>
  );
};

DialogItem.propTypes = {
  dialog: PropTypes.object
};

export default DialogItem;
