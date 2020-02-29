import React, { useEffect } from 'react';
import * as dbBugs from '../backend/dbBugRequests.js';
import BugListView from './BugListView.jsx';

export default function Dashboard(props) {

    console.log("in Dashboard");
    // const callBack = bugList => {console.log(bugList); props.setBugList(bugList);}
    const callBack = bugList => {props.setBugList(bugList);}
    
    useEffect ( () => {
        dbBugs.getAllBugs(callBack);
        console.log ("call to getAllBugs");

    },[]);

    return (
                <div>
                    {/* Dashboard */}
                    <BugListView bugList={props.bugList} setBugList={ props.setBugList } />
                </div>
           
    )
}