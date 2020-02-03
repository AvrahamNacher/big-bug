import React from 'react';
import menuHamburger from '../img/menu-hamburger.png'

import './Header.css';
// import '../img/menu-hamburger.png'
export default function Header (props) {
    return (
        <header>
            {/* <img src="" alt="MENU"/> */}
            <img className="menuHamberger" src={menuHamburger} alt="MENU"/>
            Welcome {props.user}
            Home
        </header>
    );
}