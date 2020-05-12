import React from 'react';

export default function SelectBugReproducibility(props) {
    const showList = () => {
        return props.bugReproducibilityOptions.map(el => <option key={el.id} value={el.id}>{el.bugReproducibility}</option>)
    }

    const handleChange = e => {
        // console.log("SelectBugReproducibility: handleChange: ", e.target.value);
        props.onChange(e.target.value);
    }
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label htmlFor="dataField">{props.children}:</label>
            <select className="centeredContainerInput inputFieldPadding" id="dataField" value={props.bugReproducibility} onChange={handleChange}>
                {showList()}
            </select>
        </div>
    )
}
