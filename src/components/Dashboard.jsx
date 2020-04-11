import React, { useEffect } from 'react';
import * as dbBugs from '../backend/dbBugRequests.js';
import * as dbUsers from '../backend/dbUserRequests';
import BugListView from './BugListView.jsx';

export default function Dashboard(props) {

    const callBack = bugList => { props.setBugList(bugList); }

    const generateUserList = async () => {
        let list = await dbUsers.getUsersCB();
        list.unshift({id: 0, firstName: "Unassigned", lastName: "", email: ""});
        props.setUserList(list);
    }

    const usersCallback = userList => { props.setUserList(userList); }

    useEffect(() => {
        dbBugs.getAllBugs(callBack);
        generateUserList();
    }, []);

    return (
        <div>
            <BugListView 
                bugList={props.bugList} 
                setBugList={props.setBugList} 
                userList={props.userList}
                bugStatusStages={props.bugStatusStages}
                bugSeverityLevels={props.bugSeverityLevels}
            />
        </div>
    )
}
