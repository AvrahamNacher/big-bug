// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as dbUser from "../backend/dbUserRequests.js";

import './Login.css'


export default function Login(props) {
    const [loginError, setLoginError] = useState(false);

    function allowLogin() {
        return props.currentUserData.email.length > 0 && props.currentUserData.pwd.length > 0;
    }

    function login() {
        console.log("login request");
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
            // props.setCurrentUserData({ email: "", pwd: "" });
            if (data === -1) {
                setLoginError(true);
            } else {
                // debugger;
                setLoginError(false);
                props.setCurrentUserData(data);
                props.setIsAuthenticated (true);
            }
        }
        dbUser.checkLoginInfo(props.currentUserData, callBackResponse);
    }

    function handleInput(target) {
        const { name, value } = target;
        props.setCurrentUserData({ ...props.currentUserData, [name]: value });
    }

    return (
        <div id="login">
            <div id="loginContainer">
                {loginError && <div className="error bold-font">Incorrect login. Please check your details and try again.</div>}
                <div>
                    <label htmlFor="loginEmail">Email:</label>
                    <input
                        onChange={e => handleInput(e.target)} id="loginEmail" type="text" name="email" value={props.currentUserData.email} autoFocus></input>
                </div>
                <div>
                    <label htmlFor="loginPassword">Password:</label>
                    <input onChange={e => handleInput(e.target)} id="loginPassword" type="password" name="pwd" value={props.currentUserData.pwd}></input>
                </div>
                { allowLogin()
                ? <input id="loginButton" className="button" onClick={login} type="button" value="Login"></input>
                : <input id="loginDisabled" className="button" type="button" value="Login"></input>
                }
                
                <Link to="/register"><input id="registerButton" className="button" type="button" value="Register"></input></Link>

            </div>

        </div>
    )
}
