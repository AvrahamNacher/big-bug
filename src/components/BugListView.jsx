import React from 'react';
import BugListViewHeader from './BugListViewHeader'

import './BugListView.css'

export default function BugListView (props) {
    function listBugs () {

        // debugger;
        
        return props.bugList.map( bug => {
            const { 
                id,
                bugTitle,
                bugDescription,
                bugCreatedDate,
                bugCreatedBy,
                bugAssignedTo,
                bugDueDate,
                bugStatus,
                bugSeverity,
                bugReproducableFrequency
                } = bug; //destructuring

                return (
                    <tr key={id}>
                        <td><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name="mainCheckAll"></input></td>
                        <td className = "bug_list_view_item bug_list_view_bug_id">{id}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_title">{bugTitle}</td>
                        {/* <td className = "bug_list_view_item bug_list_view_bug_description">{bugDescription}</td> */}
                        <td className = "bug_list_view_item bug_list_view_bug_createdDate">{bugCreatedDate}</td>
                        {/* <td className = "bug_list_view_item bug_list_view_bug_createdBy">{bugCreatedBy}</td> */}
                        <td className = "bug_list_view_item bug_list_view_bug_assignedTo">{bugAssignedTo}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_dueDate">{bugDueDate}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_status">{bugStatus}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_severity">{bugSeverity}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_reproducibleFrequency">{bugReproducableFrequency}</td>
                    </tr>
                )}
            );
    }
    return (
        <div>

            <table id="bug_list_view_table">
                <thead>
                    <tr>
                        <th><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name="mainCheckAll"></input></th>
                        <BugListViewHeader 
                            headerInfo={ props.bugList[0]}  
                            bugList={props.bugList} 
                            setBugList={props.setBugList}
                        />
                    </tr>
                </thead>
                <tbody>
                    {listBugs()}
                </tbody>
            </table>
        </div>
    );
}