import React from 'react';
import { Link } from 'react-router-dom';
// import menuHamburger from '../img/menu-hamburger.png'

import './Header.css';
// import '../img/menu-hamburger.png'
export default function Header(props) {
    const { firstName ="Default", lastName = "User"} = props.currentUserData;

    return (
        <header>
            {props.isAuthenticated
                ? <div id="headerContainer">
                    <div id="userName">Welcome, {firstName} {lastName}</div>
                    <div id="headerMenu">
                        <Link to="/" style={{ textDecoration: 'none' }}><div className="headerItem">Dashboard</div></Link>
                        <Link to="/createBug" style={{ textDecoration: 'none' }}><div className="headerItem">Create Bug</div></Link>
                        <Link to="/settings" style={{ textDecoration: 'none' }}><i className="fa fa-cog headerItem" style={{ marginTop: '5px' }}></i></Link>
                        <Link to="/" style={{ textDecoration: 'none' }}><div className="headerItem"><span onClick={props.logout} type="text" >Logout</span></div></Link>
                    </div>
                </div>
                : null}
        </header>

    );
}
