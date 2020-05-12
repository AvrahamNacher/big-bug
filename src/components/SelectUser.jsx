//https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871

import React from 'react';
// import * as dbUsers from '../backend/dbUserRequests';

export default function SelectUser(props) {
    // console.log ("SelectUser user = " + props.user);

    const showList = () => {
        return props.userList.map(el => <option key={el.id} value={el.id}>{el.firstName} {el.lastName}</option>)
    }

    const handleChange = e => {
        props.onChange(e.target.value);
    }

    return (
        <div className="flexColumnContainer inputFieldPadding">
            <label className="bold" htmlFor="userDataField">{props.children}:</label>
            <select className="centeredContainerInput inputFieldPadding" value={props.user} onChange={handleChange}>
                {showList()}
            </select>

        </div>
    )
}
