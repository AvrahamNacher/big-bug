import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as dbUsers from '../backend/dbUserRequests.js';

import './Register.css';

export default function Register(props) {
    const [userData, setUserData] = useState({});

    const isValidEmail = email => /^.+@.+\..+$/.test(email);

    async function register() {
        const { email } = userData;
        console.log("register request");
        console.log(email);
        if (userData.hasOwnProperty('email') && email.length !== 0) {
            console.log("is email");
            console.log("valid?", isValidEmail(email));
            if (isValidEmail(email)) {
                const isUnique = await dbUsers.checkUniqueEmailCB(email);
                if (isUnique.length === 0) {
                    console.log("is unique", isUnique);
                    let callBackResponse = data => {
                        console.log("Data received from CallBack = ", data);
                    }
                    dbUsers.register(userData, callBackResponse);
                } else {
                    console.log("not unique", isUnique);
                }
            }
        } else {
            console.log("no email");
        }

    }

    const handleInput = e => {
        const { name, value } = e.target;
        // console.log (`name ${name} value ${value}`);
        setUserData(oldState => ({ ...oldState, [name]: value }))
    }

    return (
        <div className="mainWindow">

            <div className="centeredContainer" style={{ width: 'inherit' }}>
                <div className="bold"><h1>Registration Information</h1></div>
                <div className="flexRowContainer">
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="firstName">First Name:</label>
                        <input className="centeredContainerInput" onInput={handleInput} id="firstName" name="firstName" type="text"></input>
                    </div>
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="lastName">Last Name:</label>
                        <input className="centeredContainerInput" onInput={handleInput} id="lastName" name="lastName" type="text"></input>
                    </div>
                </div>
                <div className="flexColumnContainer inputFieldPadding">
                    <label className="bold" htmlFor="email">Email:</label>
                    <input className="centeredContainerInput" onInput={handleInput} id="email" name="email" type="email"></input>
                </div>
                <div className="flexRowContainer">
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="password">Password:</label>
                        <input className="centeredContainerInput" onInput={handleInput} id="password" name="pwd" type="password"></input>
                    </div>
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="pwdConfirm">Confirm Password:</label>
                        <input className="centeredContainerInput" onInput={handleInput} id="pwdConfirm" name="pwdConfirm" type="password"></input>
                    </div>
                </div>
                <div className="flexColumnContainer inputFieldPadding">
                    <label className="bold" htmlFor="phone">Phone:</label>
                    <input className="centeredContainerInput" onInput={handleInput} id="phone" name="phone" type="text"></input>
                </div>
                <div className="flexRowContainer" style={{justifyContent:'center'}}>
                    <Link to="/"><input className="centeredContainerButton tertiaryButton buttonEnabled" type="button" value="Back"></input></Link>
                    <input className="centeredContainerButton primaryButton buttonEnabled" onClick={() => register()} type="button" value="Create Account"></input>
                </div>
            </div>

        </div>
    )
}
