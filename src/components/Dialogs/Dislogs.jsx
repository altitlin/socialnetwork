import React from 'react';
import './Dialogs.less';
import { NavLink } from 'react-router-dom';

const Dialogs = props => {
  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        <div className='dialogs__item dialogs__item_active'>
          <NavLink to='/dialogs/1' className='link'>Sasha</NavLink>
        </div>
        <div className='dialogs__item'>
          <NavLink to='/dialogs/2' className='link'>Dima</NavLink>
        </div>
        <div className='dialogs__item'>
          <NavLink to='/dialogs/3' className='link'>Maxim</NavLink>
        </div>
        <div className='dialogs__item'>
          <NavLink to='/dialogs/4' className='link'>Pasha</NavLink>
        </div>
      </div>
      <div className='dialogs__messages'>
        <div className="dialogs__message">Hi</div>
        <div className="dialogs__message">How are you?</div>
        <div className="dialogs__message">Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
