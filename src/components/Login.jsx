// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as db from "../backend/dbUserRequests.js"

import './Login.css'


export default function Login(props) {
    const [userLoginData, setUserLoginData] = useState({ email: "", pwd: "" });
    const [loginError, setLoginError] = useState(false);

    function login(e) {
        console.log("login request", e);
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
            // debugger;
            if (data === -1) {
                setLoginError(true);
                setUserLoginData({ email: "", pwd: "" })
            } else {
                setLoginError(false);
            }
        }
        // db.getHello(callBackResponse);
        db.checkLoginInfo(userLoginData, callBackResponse);
    }

    function handleInput(target) {
        const { name, value } = target;
        setUserLoginData(oldData => ({ ...userLoginData, [name]: value }));
    }

    return (
        <div id="login">
            <div id="loginContainer">
                {loginError && <div className="error bold-font">Incorrect login. Please check your details and try again.</div>}
                <div>
                    <label htmlFor="loginEmail">Email:</label>
                    <input
                        onChange={e => handleInput(e.target)} id="loginEmail" type="text" name="email" value={userLoginData.email}></input>
                </div>
                <div>
                    <label htmlFor="loginPassword">Password:</label>
                    <input onChange={e => handleInput(e.target)} id="loginPassword" type="password" name="pwd" value={userLoginData.pwd}></input>
                </div>
                <input id="loginButton" className="button" onClick={e => login(e)} type="button" value="Login"></input>
                <Link to="/register"><input id="registerButton" className="button" type="button" value="Register"></input></Link>

            </div>

        </div>
    )
}