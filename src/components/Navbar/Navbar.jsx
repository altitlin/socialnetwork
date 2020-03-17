import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.less';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__item'><NavLink className='link nav__link' to="/profile">My profile</NavLink></div>
      <div className='nav__item'><NavLink className='link nav__link' to="/news">News</NavLink></div>
      <div className='nav__item'><NavLink className='link nav__link' to="/dialogs">Message</NavLink></div>
      <div className='nav__item'><NavLink className='link nav__link' to="/music">Music</NavLink></div>
      <div className='nav__item'><NavLink className='link nav__link' to="/settings">Settings</NavLink></div>
    </nav>
  );
};

export default Navbar;
