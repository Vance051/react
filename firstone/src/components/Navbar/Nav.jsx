import React from "react";
import s from './Nav.module.css';
import {Link} from "react-router-dom"

const Nav = () => {
  return  <nav className={s.nav}>
    <div className={s.item}>
      <Link to="/profile">Profile</Link>
    </div>
    <div className={s.item}>
    <Link to="/dialogs">Dialogs</Link>
    </div>
    <div className={s.item}>
    <Link to="/news">News</Link>
    </div>
    <div className={s.item}>
    <Link to="/music">Music</Link>
    </div>
    <div className={s.item}>
    <Link to="/settings">Settings</Link>
    </div>
  </nav >
};

export default Nav;