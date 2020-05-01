import React from 'react';

export default function UserDataField(props) {
    const { errorMsgs = {}, field, value } = props;
    const hasAutoFocus = props.hasAutoFocus ? true : false;
    const isDisabled = props.isDisabled ? true : false;
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor="userDataField">{props.children}:
            <span className={errorMsgs[field] ? "error-text margin-left-30" : null}>{errorMsgs[field] ? errorMsgs[field] : null}</span>
            </label>
            {hasAutoFocus 
            ? <input className="centeredContainerInput" onInput={props.handleInput} id="userDataField" name={field} type="text" defaultValue = {''} value={value || ''} autoFocus></input>
            : isDisabled 
            ? <input className="centeredContainerInput" onInput={props.handleInput} id="userDataField" name={field} type="text" defaultValue = {''} value={value || ''} disabled></input>
            : <input className="centeredContainerInput" onInput={props.handleInput} id="userDataField" name={field} type="text" defaultValue = {''} value={value || ''}></input>
        }
        </div>
    )
}
