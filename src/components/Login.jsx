// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs
// https://www.freecodecamp.org/forum/t/react-redux-adding-a-handler-for-enter-key-events/241151

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as dbUser from "../backend/dbUserRequests.js";

import './Login.css'


export default function Login(props) {
    const [loginError, setLoginError] = useState(false);

    // General Focus Hook
    // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    const useFocus = () => {
        const htmlElRef = useRef(null);
        const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() };

        return [htmlElRef, setFocus];
    }
    const [inputRef, setInputFocus] = useFocus();

    function allowLogin() {
        return props.currentUserData.email.length > 0 && props.currentUserData.pwd.length > 0;
    }

    function login() {
        console.log("login request");
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
            if (data === -1) {
                setLoginError(true);
                setInputFocus();
                props.setCurrentUserData({ ...props.currentUserData, "email" : "", "pwd" : "" });

            } else {
                // debugger;
                setLoginError(false);
                props.setCurrentUserData(data);
                props.setIsAuthenticated(true);
            }
        }
        dbUser.checkLoginInfo(props.currentUserData, callBackResponse);
    }

    function handleInput(target) {
        const { name, value } = target;
        props.setCurrentUserData({ ...props.currentUserData, [name]: value });
    }

    function handleKeypress(e) {
        const { key } = e;
        if (key === 'Enter' && allowLogin()) {
            login();
        }
    }

    return (
        <div id="login">
            <div id="loginContainer">
                {loginError && <div className="error bold-font">Incorrect login. Please check your details and try again.</div>}
                <div>
                    <label htmlFor="loginEmail">Email:</label>
                    <input onChange={e => handleInput(e.target)} onKeyPress={e => handleKeypress(e)} id="loginEmail" type="text" name="email" value={props.currentUserData.email} autoFocus ref={inputRef} ></input>
                </div>
                <div>
                    <label htmlFor="loginPassword">Password:</label>
                    <input onChange={e => handleInput(e.target)} onKeyPress={e => handleKeypress(e)} id="loginPassword" type="password" name="pwd" value={props.currentUserData.pwd}></input>
                </div>
                {allowLogin()
                    ? <input id="loginButton" className="button" onClick={login} type="button" value="Login"></input>
                    : <input id="loginDisabled" className="button" type="button" value="Login"></input>
                }

                <Link to="/register"><input id="registerButton" className="button" type="button" value="Register"></input></Link>

            </div>

        </div>
    )
}
