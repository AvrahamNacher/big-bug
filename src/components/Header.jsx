import React from 'react';
import { Link } from 'react-router-dom';
// import menuHamburger from '../img/menu-hamburger.png'

import './Header.css';
// import '../img/menu-hamburger.png'
export default function Header(props) {
    return (
        <header>
            {props.isAuthenticated
                ? <div id="headerMenu">
                    {/* <Link to="/register"><input id="registerButton" className="button" type="button" value="Register"></input></Link> */}
                    <Link to="/" style={{ textDecoration: 'none' }}><div className="headerItem">Dashboard</div></Link>
                    <Link to="/createBug" style={{ textDecoration: 'none' }}><div className="headerItem">Create Bug</div></Link>
                    <i className="fa fa-cog" style={{marginTop:'5px'}}></i>
                    <Link to="/" style={{ textDecoration: 'none' }}><div className="headerItem"><span onClick={()=>props.setIsAuthenticated(false)} type="text" >Logout</span></div></Link>
                </div>
                : null}
        </header>

    );
}