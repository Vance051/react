import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom"
import mesagelogo from '../../images/messagelogo.svg'
import newslogo from '../../images/newslogo.svg'
import profilelogo from '../../images/profilelogo.svg'

const activeLink = ({ isActive }) => (isActive ? s.active : '');

const Nav = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
    <img src={profilelogo} />
      <NavLink to="/profile" className={(`${activeLink} ${s.item}`)}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <img src={mesagelogo} />
      <NavLink to="/dialogs" className={(`${activeLink} ${s.item}`)}>Dialogs</NavLink>
    </div>
    <div className={s.item}>
    <img src={newslogo} />
      <NavLink to="/news" className={(`${activeLink} ${s.item}`)}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" className={(`${activeLink} ${s.item}`)}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" className={(`${activeLink} ${s.item}`)}>Settings</NavLink>
    </div>
  </nav >
};

export default Nav;