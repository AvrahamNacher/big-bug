import React from 'react';

export default function UserDataField(props) {
    const { errorMsgs = {}, field = '', value = ''} = props;
    const hasAutoFocus = props.hasAutoFocus ? true : false;
    const isDisabled = props.isDisabled ? true : false;
    const idName = `userDataField_${field}`;
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor={idName}>{props.children}:
            <span className={errorMsgs[field] ? "error-text margin-left-30" : null}>{errorMsgs[field] ? errorMsgs[field] : null}</span>
            </label>
            {hasAutoFocus 
            ? <input className="centeredContainerInput" onChange={props.handleInput} onInput={props.handleInput} id={idName} name={field} type="text" value={value} autoFocus></input>
            : isDisabled 
            ? <input className="centeredContainerInput" onChange={props.handleInput} onInput={props.handleInput} id={idName} name={field} type="text" value={value} disabled></input>
            : <input className="centeredContainerInput" onChange={props.handleInput} onInput={props.handleInput} id={idName} name={field} type="text" value={value}></input>
        }
        </div>
    )
}
