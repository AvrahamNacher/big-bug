import React from 'react';

export default function UserPwdField(props) {
    const { errorMsgs = {}, name } = props;
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor="UserPwdField">{props.children}:
                <span className={errorMsgs[name] ? "error-text margin-left-30" : null}>{errorMsgs[name] ? errorMsgs[name] : null}</span>
                <span className="margin-left-30"></span>
                {props.showPwdStengthBar && <span className={props.checkPwdStrength()}>{props.checkPwdStrength() === "lowPwdStrength" ? "(weak)" : props.checkPwdStrength() === "mediumPwdStrength" ? "(okay)" : props.checkPwdStrength() === "strongPwdStrength" ? "(strong)" : null}</span>}
            </label>
            <input className="centeredContainerInput" onInput={props.handleInput} id="UserPwdField" name={name} type={props.showPwds[name] ? "text" : "password"}></input>
            <i className={props.showPwds[name] ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye"} onClick={() => props.toggleShowPwd(name)}></i>
            {props.showPwdStengthBar && <div className={props.checkPwdStrength()}></div>}
        </div>
    )
}
