import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as dbUsers from '../backend/dbUserRequests.js';

import './Register.css';

export default function Register(props) {
    const [userData, setUserData] = useState({});
    const [errorMsgs, setErrorMsgs] = useState({});
    const [showPwds, setShowPwds] = useState({pwd: false, pwdConfirm: false});
    const [pwdStrength, setPwdStrength] = useState(0);

    const isValidEmail = email => /^.+@.+\..+$/.test(email);
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_$%^&*-])(?=.{8,})");
    const mediumPasswordRegex = new RegExp("^(((?=.*[a-z!@#_$%^&*-])(?=.*[A-Z!@#_$%^&*-]))|((?=.*[a-z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-]))|((?=.*[A-Z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-])))(?=.{6,})");
    const lowPasswordRegex = new RegExp("^(?=.*[0-9a-zA-Z!@#_$%^&*-])(?=.{3,})");

    async function checkEmail() {
        const { email } = userData;
        // console.log("register request");
        console.log('email = ', email);
        console.log('errorMsgs = ', errorMsgs);
        if (userData.hasOwnProperty('email') && email.length !== 0) {
            console.log("is email");
            console.log("valid?", isValidEmail(email));
            if (isValidEmail(email)) {
                const isUnique = await dbUsers.checkUniqueEmailCB(email);
                if (isUnique.length === 0) {
                    console.log("is unique", isUnique);
                    // let callBackResponse = data => {
                    //     console.log("Data received from CallBack = ", data);
                    // }
                    // dbUsers.register(userData, callBackResponse);
                    return true;
                } else {
                    console.log("not unique", isUnique);
                    setErrorMsgs(current => ({ ...current, email: "This email address already is registered" }))
                }
            } else {
                console.log("no email");
                setErrorMsgs(current => ({ ...current, email: "Not Valid Email" }))
            }
        } else {
            console.log("no email");
            setErrorMsgs(current => ({ ...current, email: "No Email" }))

        }
        return false;
    }

    const checkPasswordQuality = () => true;

    const checkUserData = () => {
        let newErrorMsgs = {firstName: '', lastName: '', pwd: '', pwdConfirm: ''};
        if (!(userData.firstName && userData.firstName.length >= 2)) {
            newErrorMsgs = ({...newErrorMsgs, firstName: "Name needs to be at least 2 characters."});
        }
        if (!(userData.lastName && userData.lastName.length >= 2)) {
            newErrorMsgs = ({...newErrorMsgs, lastName: "Name needs to be at least 2 characters."});
        }
        if (!(userData.pwd && checkPasswordQuality())) {
            newErrorMsgs = ({...newErrorMsgs, pwd: "pwd not strong enough"});
        }
        if (!(userData.pwdConfirm && (userData.pwd == userData.pwdConfirm))) {
            newErrorMsgs = ({...newErrorMsgs, pwdConfirm: "pwd doesn't match"});
        }
        setErrorMsgs(current => ({...current, ...newErrorMsgs}));
    }

    async function register() {
        // console.log('checkEmail = ',await checkEmail());
        // console.log('errorMsgs = ', errorMsgs);
        // debugger;

        if (checkEmail() && checkUserData()) {
            let callBackResponse = data => {
                console.log("Data received from CallBack = ", data);
            }
            console.log("registering");
            // dbUsers.register(userData, callBackResponse);
        }

    }

    // async function register() {
    //     const { email } = userData;
    //     // console.log("register request");
    //     console.log(email);
    //     console.log(errorMsgs);
    //     if (userData.hasOwnProperty('email') && email.length !== 0) {
    //         console.log("is email");
    //         console.log("valid?", isValidEmail(email));
    //         if (isValidEmail(email)) {
    //             const isUnique = await dbUsers.checkUniqueEmailCB(email);
    //             if (isUnique.length === 0) {
    //                 console.log("is unique", isUnique);
    //                 let callBackResponse = data => {
    //                     console.log("Data received from CallBack = ", data);
    //                 }
    //                 // dbUsers.register(userData, callBackResponse);
    //             } else {
    //                 console.log("not unique", isUnique);
    //                 setErrorMsgs(current => ({ ...errorMsgs, email: "This email address already is registered" }))
    //             }
    //         } else {
    //             console.log("no email");
    //             setErrorMsgs(current => ({ ...errorMsgs, email: "Not Valid Email" }))
    //         }
    //     } else {
    //         console.log("no email");
    //         setErrorMsgs(current => ({ ...errorMsgs, email: "No Email" }))

    //     }

    // }

    const toggleShowPwd = ( target ) => setShowPwds( current => ({...current, [target]: !current[target]}));

    const checkPwdStrength = () => 
    !("pwd" in userData) ? "noPwdStrength"
    : strongPasswordRegex.test(userData.pwd) ? "strongPwdStrength" 
    : mediumPasswordRegex.test(userData.pwd) ? "mediumPwdStrength"
    : lowPasswordRegex.test(userData.pwd) ? "lowPwdStrength"
    : "noPwdStrength"

    const handleInput = e => {
        const { name, value } = e.target;
        // console.log (`name ${name} value ${value}`);
        // console.log(userData.pwd);
        // debugger;
        // if (strongPasswordRegex.test(userData.pwd)) {
        //     setPwdStrength(3);
        // } else if (mediumPasswordRegex.test(userData.pwd)) {
        //     setPwdStrength(2);
        // } else if (lowPasswordRegex.test(userData.pwd)) {
        //     setPwdStrength(1);
        // } else {
        //     setPwdStrength(0);
        // }
        console.log ('pwdStrength = ', pwdStrength);


        // if (lowPasswordRegex.test(userData.pwd)) { console.log('low pwd'); } else { console.log('not enough') }
        // if (mediumPasswordRegex.test(userData.pwd)) { console.log('medium pwd'); } else { console.log('not enough') }
        // if (strongPasswordRegex.test(userData.pwd)) { console.log('strong pwd'); } else { console.log('not enough') }
        setErrorMsgs(oldState => ({ ...oldState, [name]: '' }))
        setUserData(oldState => {
            return ({ ...oldState, [name]: value })
        })
        // setUserData(oldState => ({ ...oldState, [name]: value }))
    }

    return (
        <div className="mainWindow">

            <div className="centeredContainer" style={{ width: 'inherit' }}>
                <div className="bold"><h1>Registration Information</h1></div>
                <div className="flexRowContainer">
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="firstName">First Name:
                            <span className={errorMsgs.firstName ? "error-text margin-left-30" : null}>{errorMsgs.firstName ? errorMsgs.firstName : null}</span>
                        </label>
                        <input className="centeredContainerInput" onInput={handleInput} id="firstName" name="firstName" type="text" autoFocus></input>
                    </div>
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="lastName">Last Name:
                            <span className={errorMsgs.lastName ? "error-text margin-left-30" : null}>{errorMsgs.lastName ? errorMsgs.lastName : null}</span>
                        </label>
                        <input className="centeredContainerInput" onInput={handleInput} id="lastName" name="lastName" type="text"></input>
                    </div>
                </div>
                <div className="flexColumnContainer inputFieldPadding">
                    <label className="bold" htmlFor="email">Email:
                        {errorMsgs.email ? <span className="error-text margin-left-30">{errorMsgs.email} <i className="fas fa-exclamation-triangle error-text"></i></span> : null}
                    </label>
                    <input className="centeredContainerInput" onInput={handleInput} id="email" name="email" type="email"></input>
                </div>
                <div className="flexRowContainer">
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="password">Password:
                        <span className={errorMsgs.pwd ? "error-text margin-left-30" : null}>{errorMsgs.pwd ? errorMsgs.pwd : null}</span>
                        </label>
                        <input className="centeredContainerInput" onInput={handleInput} id="password" name="pwd" type={showPwds.pwd ? "text" : "password"}></input>
                        <i className={showPwds.pwd ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye" } onClick={ ()=>toggleShowPwd("pwd")}></i>
                        <div className={ checkPwdStrength() }></div>
                    </div>
                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="pwdConfirm">Confirm Password:
                        <span className={errorMsgs.pwdConfirm ? "error-text margin-left-30" : null}>{errorMsgs.pwdConfirm ? errorMsgs.pwdConfirm : null}</span>
                        </label>
                        <input className="centeredContainerInput" onInput={handleInput} id="pwdConfirm" name="pwdConfirm" type={showPwds.pwdConfirm ? "text" : "password"}></input>
                        <i className={showPwds.pwdConfirm ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye" } onClick={ ()=>toggleShowPwd("pwdConfirm")}></i>
                    </div>
                </div>
                <div className="flexColumnContainer inputFieldPadding">
                    <label className="bold" htmlFor="phone">Phone:</label>
                    <input className="centeredContainerInput" onInput={handleInput} id="phone" name="phone" type="text"></input>
                </div>
                <div className="flexRowContainer" style={{ justifyContent: 'center' }}>
                    <Link to="/"><input className="centeredContainerButton tertiaryButton buttonEnabled" style={{ marginTop: '30px', marginRight: '60px', minWidth: '80px' }} type="button" value="Back"></input></Link>
                    <input className="centeredContainerButton primaryButton buttonEnabled" onClick={() => register()} type="button" value="Create Account"></input>
                </div>
            </div>

        </div>
    )
}
