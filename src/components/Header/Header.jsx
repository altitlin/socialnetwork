import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.less';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__data">
        <div className="header__logo">
          <NavLink to='/' className='link header__link'>
            <img className='header__link-img' src='http://gambolthemes.net/workwise-new/images/logo.png' />
          </NavLink>
        </div>
        <form className='search-form header__search-form' name='search'>
          <input type='search' className='search-input header__search-input' placeholder='Search...' />
          <button type='submit' className='header__btn-search' >&#128269;</button>
        </form>
        <Navbar />
        <div className='header__user-account'>
          <div className="header__user-info">
            <img src='http://gambolthemes.net/workwise-new/images/resources/user.png' className="header__user-logo" />
            <a href="#" className='link header__user-link'>Sasha</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
