import React, { useState } from 'react'
import * as db from "../backend/dbUserRequests.js"

export default function Register(props) {
    const [userData, setUserData] = useState("");
    function register(e) {
        console.log("register request", e);
        console.log(userData);
        let callBackResponse = data => {
            console.log("Data received from CallBack = ", data);
        }
        db.register(userData, callBackResponse);
    }

    const handleInput = e => {
        const { name, value } = e.target;
        // console.log (`name ${name} value ${value}`);
        setUserData( oldState => ({ ...oldState, [name]:value }))
    }

    return (
        <div id="register">
            <div id="registerContainer">
                <input onInput={handleInput} name="firstName" type="text" placeholder="First Name"></input>
                <input onInput={handleInput} name="lastName" type="text" placeholder="Last Name"></input>
                <input onInput={handleInput} name="email" type="email" placeholder="Email"></input>
                <input onInput={handleInput} name="pwd" type="password" placeholder="Password"></input>
                <input onInput={handleInput} name="pwdConfirm" type="password" placeholder="Confirm Password"></input>
                <input onInput={handleInput} name="phone" type="text" placeholder="Phone"></input>
                <div>
                    <input className="button" onClick={() => register()} type="button" value="Create Account"></input>
                </div>
            </div>

        </div>
    )
}