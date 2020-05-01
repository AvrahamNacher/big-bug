// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs
// https://www.freecodecamp.org/forum/t/react-redux-adding-a-handler-for-enter-key-events/241151

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as dbUser from "../backend/dbUserRequests.js";

// import './Login.css'


export default function Login(props) {
    const [loginError, setLoginError] = useState(false);
    const [showPwd, setShowPwd] = useState(false);


    // General Focus Hook
    // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    const useFocus = () => {
        const htmlElRef = useRef(null);
        const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() };

        return [htmlElRef, setFocus];
    }
    const [inputRef, setInputFocus] = useFocus();

    const toggleShowPwd = () => setShowPwd(current => !current);

    function allowLogin() {
        return props.currentUserData.email && 
            props.currentUserData.email.length > 0 && 
            props.currentUserData.pwd && 
            props.currentUserData.pwd.length > 0;
    }

    function login() {
        console.log("login request");
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
            if (data === -1) {
                setLoginError(true);
                setInputFocus();
                props.setCurrentUserData({ ...props.currentUserData, "email": "", "pwd": "" });

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
        <div className="mainWindow">
            <div className="centeredContainer narrowWindow">
                {loginError && <div className="error-text bold">Incorrect login. Please check your details and try again.</div>}
                <div className="flexColumnContainer">
                    <label className="bold" htmlFor="loginEmail">Email:</label>
                    <input onChange={e => handleInput(e.target)} onKeyPress={e => handleKeypress(e)} id="loginEmail" className="centeredContainerInput" type="text" name="email" value={props.currentUserData.email || ''} autoFocus ref={inputRef} ></input>
                </div>
                <div className="flexColumnContainer">
                    <label className="bold" htmlFor="loginPassword">Password:</label>
                    <input onChange={e => handleInput(e.target)} onKeyPress={e => handleKeypress(e)} id="loginPassword" className="centeredContainerInput" type={showPwd ? "text" : "password"} name="pwd" value={props.currentUserData.pwd || ''}></input>
                    <i className={showPwd ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye"} onClick={() => toggleShowPwd()}></i>

                </div>
                {allowLogin()
                    ? <input id="loginButton" className="centeredContainerButton primaryButton buttonEnabled" onClick={login} type="button" value="Login"></input>
                    : <input id="loginDisabled" className="centeredContainerButton primaryButtonDisabled" type="button" value="Login"></input>
                }
                <div className="flexColumnContainer text-center">
                    <Link to="/register"><input id="registerButton" className="centeredContainerButton tertiaryButton buttonEnabled" type="button" value="Register"></input></Link>
                </div>

            </div>

        </div>
    )
}
