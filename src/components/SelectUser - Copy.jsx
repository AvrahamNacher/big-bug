//https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871

import React, { useState, useEffect } from 'react';
import * as dbUsers from '../backend/dbUserRequests';

export default function SelectUser(props) {
    const [user, setUser] = useState('');
    const [userList, setUserList] = useState([]);

    useEffect( () => {
        generateUserList();
    }, []);

    const generateUserList = async () => {
        let list = await dbUsers.getUsersCB();
        console.log (list);
        setUserList(list);
    }

    function showList() {
        return userList.map (el => <option key={el.id} value={el.id}>{el.firstName} {el.lastName}</option>)
    }

    const handleChange = e => {
        console.log (e.target.value);
        setUser(e.target.value);
        props.onChange(e.target.value);
    }

    return (
        <select value={user} onChange={handleChange}>
            {/* need to add UNASSIGNED */}
            {showList()}
        </select>
    )
}