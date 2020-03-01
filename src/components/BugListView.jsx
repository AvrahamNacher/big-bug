import React from 'react';
import { Link } from 'react-router-dom';
import BugListViewHeader from './BugListViewHeader';

import './BugListView.css'

export default function BugListView (props) {
    function listBugs () {

        // debugger;
        
        return props.bugList.map( bug => {
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
                bugReproducableFrequency
                } = bug; //destructuring

                return (
                    <tr key={id}>
                        <td><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name="mainCheckAll"></input></td>
                        <td className = "bug_list_view_item bug_list_view_bug_id"><Link to={`/bug/${id}`}>{id}</Link></td>
                        <td className = "bug_list_view_item bug_list_view_bug_title"><Link to={`/bug/${id}`}>{bugTitle}</Link></td>
                        {/* <td className = "bug_list_view_item bug_list_view_bug_description">{bugDescription}</td> */}
                        <td className = "bug_list_view_item bug_list_view_bug_createdDate"><Link to={`/bug/${id}`}>{bugCreatedDate}</Link></td>
                        {/* <td className = "bug_list_view_item bug_list_view_bug_createdBy">{bugCreatedBy}</td> */}
                        <td className = "bug_list_view_item bug_list_view_bug_assignedTo"><Link to={`/bug/${id}`}>{bugAssignedTo}</Link></td>
                        <td className = "bug_list_view_item bug_list_view_bug_dueDate"><Link to={`/bug/${id}`}>{bugDueDate}</Link></td>
                        <td className = "bug_list_view_item bug_list_view_bug_status"><Link to={`/bug/${id}`}>{bugStatus}</Link></td>
                        <td className = "bug_list_view_item bug_list_view_bug_severity"><Link to={`/bug/${id}`}>{bugSeverity}</Link></td>
                        <td className = "bug_list_view_item bug_list_view_bug_reproducibleFrequency"><Link to={`/bug/${id}`}>{bugReproducableFrequency}</Link></td>
                    </tr>
                )}
            );
    }
    return (
        <div>

            <table id="bug_list_view_table">
                <thead>
                    <tr key={0}>
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
                {/* <Link to="/createBug">createBug</Link> */}

        </div>
    );
}