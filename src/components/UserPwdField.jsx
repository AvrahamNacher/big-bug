import React from 'react';

export default function UserPwdField(props) {
    const { errorMsgs = {}, field, value = '' } = props;
    const pwdStrengh = props.checkPwdStrength(field);
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor="UserPwdField">{props.children}:
                <span className={errorMsgs[field] ? "error-text margin-left-30" : null}>{errorMsgs[field] ? errorMsgs[field] : null}</span>
                <span className="margin-left-30"></span>
                {props.showPwdStengthBar && <span className={pwdStrengh}>{pwdStrengh === "lowPwdStrength" ? "(weak)" : pwdStrengh === "mediumPwdStrength" ? "(okay)" : pwdStrengh === "strongPwdStrength" ? "(strong)" : null}</span>}
            </label>
            <input className="centeredContainerInput" onInput={props.handleInput} id="UserPwdField" name={field} type={props.showPwds[field] ? "text" : "password"} value={value}></input>
            <i className={props.showPwds[field] ? "fa fa-eye-slash passwordEye" : "fa fa-eye passwordEye"} onClick={() => props.toggleShowPwd(field)}></i>
            {props.showPwdStengthBar && <div className={pwdStrengh}></div>}
        </div>
    )
}
