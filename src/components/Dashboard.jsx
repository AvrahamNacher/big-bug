import React, { useEffect } from 'react';
import * as dbBugs from '../backend/dbBugRequests.js';
import * as dbUsers from '../backend/dbUserRequests';
import BugListView from './BugListView.jsx';

export default function Dashboard(props) {

    // console.log("in Dashboard");
    // const callBack = bugList => {console.log(bugList); props.setBugList(bugList);}
    const callBack = bugList => {props.setBugList(bugList);}

    const generateUserList = async () => {
        let list = await dbUsers.getUsersCB();
        console.log (list);
        props.setUserList(list);
    }
    
    useEffect ( () => {
        dbBugs.getAllBugs(callBack);
        // console.log ("call to getAllBugs");
        generateUserList();
    },[]);

    return (
                <div>
                    <BugListView bugList={props.bugList} setBugList={ props.setBugList } userList={props.userList} />
                </div>
           
    )
}