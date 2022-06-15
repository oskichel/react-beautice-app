import React from 'react';
import './Footer.css';
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return(
        <div className={'Footer'}>
            <div className={'Footer-module'}>
                <div className={'Footer-module-logo'}>
                    <div className={'Footer-logo'}>
                        <div className={'Footer-ellipse'}></div>
                        <div className={'Footer-name'}>Beautice</div>
                    </div>
                </div>
                <h2 className={'Footer-module-title'}>Pages</h2>
                <div className={'Footer-module-pages'}>
                    <NavLink className={'Footer-page'} to={'/'}>Home</NavLink>
                    <NavLink className={'Footer-page'} to={'/about'}>About</NavLink>
                    <NavLink className={'Footer-page'} to={'/service'}>Service</NavLink>
                    <NavLink className={'Footer-page'} to={'/contact'}>Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;