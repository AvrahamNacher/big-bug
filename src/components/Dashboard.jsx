import React, { useState, useEffect } from 'react';
import * as dbBugs from '../backend/dbBugRequests.js';
import BugListView from './BugListView.jsx';

export default function Dashboard(props) {
    // const [bugList, setBugList] = useState([]);

    console.log("in Dashboard");
    const callBack = bugList => {console.log(bugList); props.setBugList(bugList);}
    
    useEffect ( () => {
        console.log ("call to getAllBugs");
        dbBugs.getAllBugs(callBack);

    },[]);

    return (
                <div>
                    Dashboard
                    <BugListView bugList={props.bugList} setBugList={ newList => props.setBugList(newList)} />
                </div>
           
    )
}