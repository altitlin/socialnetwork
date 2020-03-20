import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.less';

const Navbar = () => {
  return (
    <nav className='header__menu'>
      <NavLink className='link header__menu-item' to="/profile">My profile</NavLink>
      <NavLink className='link header__menu-item' to="/news">News</NavLink>
      <NavLink className='link header__menu-item' to="/dialogs">Message</NavLink>
      <NavLink className='link header__menu-item' to="/music">Music</NavLink>
      <NavLink className='link header__menu-item' to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
