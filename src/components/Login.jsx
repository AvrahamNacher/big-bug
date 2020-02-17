// https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as db from "../backend/dbUserRequests.js"

import './Login.css'


export default function Login(props) {
    const [userLoginData, setUserLoginData] = useState("");

    function login(e) {
        console.log("login request", e);
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
        }
        db.checkLoginInfo(userLoginData, callBackResponse);
    }

    function handleInput(target) {
        const { name, value } = target;
        setUserLoginData(oldData => ({ ...userLoginData, [name]: value }));
    }

    return (
        <div id="login">
            <div id="loginContainer">
                <input
                    onInput={e => handleInput(e.target)} type="text" name="email" placeholder="email"></input>
                <input onInput={e => handleInput(e.target)} type="password" name="pwd" placeholder="password"></input>
                <div>
                    <Link to="/register"><input className="button" type="button" value="Register"></input></Link>
                    <input className="button" onClick={e => login(e)} type="button" value="Login"></input>
                </div>

            </div>

        </div>
    )
}