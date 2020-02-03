import React from 'react';
import BugListViewHeader from './BugListViewHeader'

import './BugListView.css'

export default function BugListView (props) {
    function listBugs (bugList) {

        function testClick() {
            console.log("clicked ID");
            props.setUser("aa");
        }
        
        return bugList.map( bug => {
            const { 
                id,
                title,
                created,
                assigned,
                due,
                status,
                severity,
                reproducable
                } = bug; //destructuring

                return (
                    <tr key={id}>
                        <td><input className="bug_list_view_item bug_list_view_check_box" type="checkbox" name="mainCheckAll"></input></td>
                        <td onClick={testClick} className = "bug_list_view_item bug_list_view_bug_id">{id}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_title">{title}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_created">{created}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_assigned">{assigned}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_due">{due}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_status">{status}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_severity">{severity}</td>
                        <td className = "bug_list_view_item bug_list_view_bug_reproducible">{reproducable}</td>
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
                            headerInfo={props.bugList[0]} 
                            bugList={props.bugList} 
                            setBugList={props.setBugList}
                        />
                    </tr>
                </thead>
                <tbody>
                    {listBugs(props.bugList)}
                </tbody>
            </table>
        </div>
    );
}