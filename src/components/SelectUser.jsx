//https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871

import React, { useState, useEffect } from 'react';
import * as dbUsers from '../backend/dbUserRequests';

export default function SelectUser(props) {
    // console.log ("SelectUser user = " + props.user);

    const showList = () => {
        return props.userList.map (el => <option key={el.id} value={el.id}>{el.firstName} {el.lastName}</option>)
    }

    const handleChange = e => {
        props.onChange(e.target.value);
    }

    return (
        <select value={props.user} onChange={handleChange}>
            {showList()}
        </select>
    )
}
