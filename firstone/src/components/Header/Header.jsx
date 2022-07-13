import React from "react";
import s from './Header.module.css';
import logo from '../../images/logo.svg'


const Header = () => {
    return <header className={s.header}>
        <img
        src={logo}
        alt="???" />
        <h1>YoCars</h1>
    </header>
};

export default Header;