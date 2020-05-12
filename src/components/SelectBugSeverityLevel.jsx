import React from 'react';

export default function SelectBugSeverityLevel(props) {
    const showList = () => {
        return props.bugSeverityLevels.map(el => <option key={el.id} value={el.id}>{el.SeverityLevel}</option>)
    }

    const handleChange = e => {
        // console.log("SelectBugSeverity: handleChange: ", e.target.value);
        props.onChange(e.target.value);
    }
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label htmlFor="dataField">{props.children}:</label>
            <select className="centeredContainerInput inputFieldPadding" id="dataField" value={props.bugSeverity} onChange={handleChange}>
                {showList()}
            </select>
        </div>
    )
}
