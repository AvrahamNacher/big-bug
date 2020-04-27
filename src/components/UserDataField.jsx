import React from 'react';

export default function UserDataField(props) {
    const { errorMsgs = {}, name } = props;
    const hasAutoFocus = props.hasAutoFocus ? true : false;
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor="userDataField">{props.children}:
            <span className={errorMsgs[name] ? "error-text margin-left-30" : null}>{errorMsgs[name] ? errorMsgs[name] : null}</span>
            </label>
            {hasAutoFocus 
            ? <input className="centeredContainerInput" onInput={props.handleInput} id="userDataField" name={name} type="text" autoFocus></input>
            : <input className="centeredContainerInput" onInput={props.handleInput} id="userDataField" name={name} type="text"></input>
        }
        </div>
    )
}
