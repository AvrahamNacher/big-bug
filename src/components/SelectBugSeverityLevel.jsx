import React from 'react';

export default function SelectBugSeverityLevel(props) {
    const showList = () => {
        return props.bugSeverityLevels.map ( el => <option key={el.id} value={el.id}>{el.SeverityLevel}</option>)
    }

    const handleChange = e => {
        console.log("SelectBugSeverity: handleChange: ",e.target.value);
        props.onChange(e.target.value);
    }
    return (
        <>
        <label htmlFor="bugSeverity">Severity:</label>
        <select id="bugSeverity" value={props.bugSeverity} onChange={handleChange}>
            {showList()}
        </select>
        </>
    )
}
