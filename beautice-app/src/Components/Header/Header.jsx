import React from 'react';
import './Header.css';
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div className={'Logo'}>
                <div className={'Ellipse'}></div>
                <div className={'Name'}><Link className={'Name'} to={'/'}>Beautice</Link></div>
            </div>
            <div className={'Header-menu'}>
                <NavLink className={'Header-page'} to={'/'}>Home</NavLink>
                <NavLink className={'Header-page'} to={'/doctors'}>Doctors</NavLink>
                <NavLink className={'Header-page'} to={'/service'}>Service</NavLink>
                <NavLink className={'Header-page Contact'} to={'/contact'}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;