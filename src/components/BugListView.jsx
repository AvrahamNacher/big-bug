import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BugListViewHeader from './BugListViewHeader';
import * as dbBugs from '../backend/dbBugRequests';

import './BugListView.css'

export default function BugListView(props) {
    const [bugsToDelete, setBugsToDelete] = useState([]);

    const toggleCheckbox = e => {
        const { name, checked } = e.target; // destructuring
        if (checked) {
            setBugsToDelete([...bugsToDelete, name])
        } else {
            setBugsToDelete(bugsToDelete.filter(el => el !== name));
        };
    }

    const toggleAllCheckBoxes = e => {
        const { checked: masterCheckbox } = e.target;
        console.log("master checkbox = " + masterCheckbox);
        if (masterCheckbox) {
            let checkAllItems = props.bugList.map(el => `(id=${el.id})`);
            setBugsToDelete(checkAllItems);

        } else {
            setBugsToDelete([]);
        }
    }

    const deleteCallback = response => {
        console.log(response);
    }

    const deleteBugs = () => {
        let SQL = bugsToDelete.join(' OR ');
        console.log(SQL);
        dbBugs.deleteBugs(SQL, deleteCallback);
    }

    const usersCallback = userList => { props.setUserList(userList); }


    function listBugs() {

        return props.bugList.map(bug => {
            const {
                id,
                bugTitle,
                // bugDescription,
                bugCreatedDate,
                // bugCreatedBy,
                bugAssignedTo,
                bugDueDate,
                bugStatus,
                bugSeverity,
                bugReproducableFrequency,
            } = bug; //destructuring

            let bugAssignedToName = props.userList.filter(user => user.id === parseInt(bugAssignedTo));
            try {
                // console.log("list to match = " + bugAssignedTo + " name: " + bugAssignedToName[0]);
                bugAssignedToName = (bugAssignedToName[0].firstName + " " + bugAssignedToName[0].lastName);
            }
            catch (error) {
                console.error(error);
            }

            return (
                <tr key={id}>
                    <td><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name={`(id=${id})`} onChange={toggleCheckbox} checked={bugsToDelete.includes(`(id=${id})`)}></input></td>
                    <td className="bug_list_view_item bug_list_view_bug_id"><Link to={`/bug/${id}`}>{id}</Link></td>
                    <td className="bug_list_view_item bug_list_view_bug_title"><Link to={`/bug/${id}`}>{bugTitle}</Link></td>
                    {/* <td className = "bug_list_view_item bug_list_view_bug_description">{bugDescription}</td> */}
                    <td className="bug_list_view_item bug_list_view_bug_createdDate"><Link to={`/bug/${id}`}>{bugCreatedDate}</Link></td>
                    {/* <td className = "bug_list_view_item bug_list_view_bug_createdBy">{bugCreatedBy}</td> */}
                    <td className="bug_list_view_item bug_list_view_bug_assignedTo"><Link to={`/bug/${id}`}>{bugAssignedToName}</Link></td>
                    <td className="bug_list_view_item bug_list_view_bug_dueDate"><Link to={`/bug/${id}`}>
                        {bugDueDate == '0001-01-01'
                            ? 'None'
                            : bugDueDate
                        }
                    </Link></td>
                    <td className="bug_list_view_item bug_list_view_bug_status"><Link to={`/bug/${id}`}>{bugStatus}</Link></td>
                    <td className="bug_list_view_item bug_list_view_bug_severity"><Link to={`/bug/${id}`}>{bugSeverity}</Link></td>
                    <td className="bug_list_view_item bug_list_view_bug_reproducibleFrequency"><Link to={`/bug/${id}`}>{bugReproducableFrequency}</Link></td>
                </tr>
            )
        }
        );
    }
    return (
        <div>
            <table id="bug_list_view_table">
                <thead>
                    <tr key={0}>
                        <th><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name="mainCheckAll" onChange={toggleAllCheckBoxes} checked={bugsToDelete.length === props.bugList.length}></input></th>
                        <BugListViewHeader
                            headerInfo={props.bugList[0]}
                            bugList={props.bugList}
                            setBugList={props.setBugList}
                        />
                    </tr>
                </thead>
                <tbody>
                    {listBugs()}
                </tbody>
            </table>
            {bugsToDelete.length > 0 && <div><input onClick={deleteBugs} type="button" value="DELETE"></input></div>}
        </div>
    );
}