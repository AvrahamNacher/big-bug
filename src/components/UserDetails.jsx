import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import UserDataField from './UserDataField';
import UserPwdField from './UserPwdField';
import * as dbUsers from '../backend/dbUserRequests.js';

import './UserDetails.css';

export default function Register(props) {
    const [userData, setUserData] = useState(props.currentUserData);
    const { email, pwd, firstName, lastName, phone, landingPage } = userData;  // destructuring
    const [errorMsgs, setErrorMsgs] = useState({});
    const [showPwds, setShowPwds] = useState({});
    const history = useHistory();
    // is this the Register or Settings page
    const isRegisterPage = history.location.pathname === '/register' ? true : false;

    useEffect( ()=> {
        if (!isRegisterPage) {
            // do not reveal current pwd
            setUserData( oldState => ({...oldState, pwd: ''}));
        }
    },[]);
    const isValidEmail = email => /^.+@.+\..+$/.test(email);
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_$%^&*-])(?=.{8,})");
    const mediumPasswordRegex = new RegExp("^(((?=.*[a-z!@#_$%^&*-])(?=.*[A-Z!@#_$%^&*-]))|((?=.*[a-z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-]))|((?=.*[A-Z!@#_$%^&*-])(?=.*[0-9!@#_$%^&*-])))(?=.{6,})");
    const lowPasswordRegex = new RegExp("^(?=.*[0-9a-zA-Z!@#_$%^&*-])(?=.{3,})");

    const isValidPhone = phone => /^(\([0-9]{3}\)\s*|[0-9]{2,3}\-*)[0-9]{3}-*[0-9]{4}$/.test(phone);

    async function checkEmail() {
        const { email } = userData;
        let isUnique = false;
        // console.log("register request");
        console.log('email = ', email);
        console.log('errorMsgs = ', errorMsgs);
        if (userData.hasOwnProperty('email') && email.length !== 0) {
            console.log("is email");
            console.log("valid?", isValidEmail(email));
            if (isValidEmail(email)) {
                // const isUnique = await dbUsers.checkUniqueEmailPromise(email);
                try {
                    isUnique = await axios.post('http://localhost:5000/users/isUnique', {email});
                    console.log("isUnique response = ", isUnique);
                } catch (err) {
                    console.log ("checkEmail Error ", err);
                }
                if (isUnique.data) {
                    console.log("is unique", isUnique);
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

    async function isPwdCorrect() {
        return await axios.post('http://localhost:5000/users/login', userData)
            .then( res => {
                console.log("isPwdCorrect ", res);
                if (res.status === 200) {
                    return true;
                } else {
                    setErrorMsgs(current => ({ ...current, pwd: "Incorrect Password" }))
                    return false;
                }
            })
    }

    const checkPasswordQuality = (sourcePwdField) => userData[sourcePwdField] && userData[sourcePwdField].length > 2;

    const checkUserData = (sourcePwdField) => {
        let newErrorMsgs = { firstName: '', lastName: '', [sourcePwdField]: '', pwdConfirm: '' };
        let validLoginData = true;
        if (!(firstName && firstName.length >= 2)) {
            newErrorMsgs = ({ ...newErrorMsgs, firstName: "Name needs to be at least 2 characters." });
            validLoginData = false;
        }
        if (!(lastName && lastName.length >= 2)) {
            newErrorMsgs = ({ ...newErrorMsgs, lastName: "Name needs to be at least 2 characters." });
            validLoginData = false;
        }
        if (sourcePwdField === 'pwd' || userData[sourcePwdField] && userData[sourcePwdField].length !== 0) {
            if (!checkPasswordQuality(sourcePwdField)) {
                newErrorMsgs = ({ ...newErrorMsgs, [sourcePwdField]: "pwd not strong enough" });
                validLoginData = false;
            } else if (!(userData.pwdConfirm && (userData[sourcePwdField] == userData.pwdConfirm))) {
                newErrorMsgs = ({ ...newErrorMsgs, pwdConfirm: "pwd doesn't match" });
                validLoginData = false;
            }
        }
        if (!isValidPhone(phone)) {
            newErrorMsgs = ({...newErrorMsgs, phone: "Invalid phone number."});
            validLoginData = false;
        }
        setErrorMsgs(current => ({ ...current, ...newErrorMsgs }));
        return validLoginData;
    }

    async function register(e) {
        e.preventDefault();
        let hasAllUserData = checkUserData("pwd");
        if (await checkEmail() && hasAllUserData) {
            axios.post('http://localhost:5000/users/register', userData)
                .then(res => {
                    let data = res.data;
                    console.log("result of register = ", data);
                    props.setIsAuthenticated(true);
                    props.setCurrentUserData(userData);
                    history.push("/");
                })
        }
    }

    async function update(e) {
        e.preventDefault();
        let hasAllUserData = checkUserData("newPwd");
        if (await isPwdCorrect() && hasAllUserData) {
            axios.post('http://localhost:5000/users/update', userData)
                .then (data => {
                    console.log("Data received from update = ", data);
                    props.setCurrentUserData({...userData, pwd: userData.newPwd ? userData.newPwd : pwd });
                    history.push("/");
                })
        } else {
            console.log("maybe incorrect pwd");
        }
    }

    const toggleShowPwd = (target) => setShowPwds(current => ({ ...current, [target]: !current[target] }));

    const checkPwdStrength = (field) =>
        !(field in userData) ? "noPwdStrength"
            : strongPasswordRegex.test(userData[field]) ? "strongPwdStrength"
                : mediumPasswordRegex.test(userData[field]) ? "mediumPwdStrength"
                    : lowPasswordRegex.test(userData[field]) ? "lowPwdStrength"
                        : "noPwdStrength"

    const handleInput = e => {
        const { name, value } = e.target;
        setErrorMsgs(oldState => ({ ...oldState, [name]: '' }))
        setUserData(oldState => {
            return ({ ...oldState, [name]: value })
        })
    }

    return (
        <div className="userDetailsWindow">
            <div className="centeredContainer" style={{ width: 'inherit' }}>
                <div className="bold"><h1>{isRegisterPage ? "Registration Information:" : "Update Your Settings:"}</h1></div>
                <div className="flexRowContainer">
                    <UserDataField field={"firstName"} value={firstName} errorMsgs={errorMsgs} handleInput={handleInput} hasAutoFocus={true}>First Name</UserDataField>
                    <UserDataField field={"lastName"} value={lastName} errorMsgs={errorMsgs} handleInput={handleInput}>Last Name</UserDataField>
                </div>
                {isRegisterPage
                    ? <UserDataField field={"email"} value={email} errorMsgs={errorMsgs} handleInput={handleInput}>Email</UserDataField>
                    : <UserDataField field={"email"} value={email} isDisabled={true} handleInput={handleInput}>Email</UserDataField>

                }


                <div className="flexRowContainer">
                    {isRegisterPage
                        ? <UserPwdField field={"pwd"} value={userData.pwd} showPwds={showPwds} toggleShowPwd={toggleShowPwd} showPwdStengthBar={true} errorMsgs={errorMsgs} handleInput={handleInput} checkPwdStrength={checkPwdStrength}>Password</UserPwdField>
                        :
                        <>
                            <UserPwdField field={"pwd"} value={userData.pwd} showPwds={showPwds} toggleShowPwd={toggleShowPwd} showPwdStengthBar={false} errorMsgs={errorMsgs} handleInput={handleInput} checkPwdStrength={checkPwdStrength}>Confirm Old Password</UserPwdField>
                            <UserPwdField field={"newPwd"} value={userData.newPwd} showPwds={showPwds} toggleShowPwd={toggleShowPwd} showPwdStengthBar={true} errorMsgs={errorMsgs} handleInput={handleInput} checkPwdStrength={checkPwdStrength}>New Password</UserPwdField>
                        </>
                    }
                    <UserPwdField field={"pwdConfirm"} value={userData.pwdConfirm} showPwds={showPwds} toggleShowPwd={toggleShowPwd} showPwdStengthBar={false} errorMsgs={errorMsgs} handleInput={handleInput} checkPwdStrength={checkPwdStrength}>Confirm Password</UserPwdField>
                </div>
                <UserDataField field={"phone"} value={phone} errorMsgs={errorMsgs} handleInput={handleInput}>Phone</UserDataField>
                <div className="flexRowContainer hideOnPrint" style={{ justifyContent: 'center' }}>
                    {/* <Link to="/"><input className="centeredContainerButton tertiaryButton buttonEnabled" style={{ marginTop: '30px', marginRight: '60px', minWidth: '80px' }} type="button" value="Back"></input></Link> */}
                    <Link to="/"><input className="centeredContainerButton tertiaryButton buttonEnabled backButton" type="button" value="Back"></input></Link>
                    <input className="centeredContainerButton primaryButton buttonEnabled" onClick={isRegisterPage ? (e) => register(e) : (e) => update(e)} type="button" value={isRegisterPage ? "Create Account" : "Update Settings"}></input>
                </div>
            </div>

        </div>
    )
}
