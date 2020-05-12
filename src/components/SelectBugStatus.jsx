import React from 'react';

export default function SelectBugStatus(props) {
    const showList = () => props.bugStatusStages.map( el => <option key={el.id} id={el.id} value={el.id}>{el.status}</option>)
    const handleChange = e => props.onChange(e.target.value);
    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label htmlFor="bugStatus">Status:</label>
            <select className="centeredContainerInput" id="bugStatus" value={props.bugStatus} onChange={handleChange}>
                {showList()}
            </select>
        </div>
    )
}
