import React from 'react';
import css from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className={css.nav_bar}>
        <NavLink to="/" className={css.links}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.links}>
          Movies
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
