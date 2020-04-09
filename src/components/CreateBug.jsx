import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectUser from './SelectUser';
import SelectBugSeverityLevel from './SelectBugSeverityLevel'
import * as db from '../backend/dbBugRequests';

import './CreateBug.css';

export default function CreateBug(props) {

    function resetBugFields() {
        return (
            {
                bugTitle: "",
                bugDescription: "",
                bugCreatedDate: new Date().toISOString().split('T')[0],
                bugCreatedBy: "",
                bugAssignedTo: "0",
                bugDueDate: "",
                bugStatus: "",
                bugSeverity: "1",
                bugReproducableFrequency: ""
            }
        );
    }
    const [newBug, setNewBug] = useState(resetBugFields());
    const [submitMessage, setSubmitMessage] = useState({ message: "Enter New Bug Details", messageType: "success", show: true });

    const handleInput = e => {
        const { name, value } = e.target; // destructuring
        setNewBug({ ...newBug, [name]: value });
    }

    const callback = result => {
        if (result === '1') {
            setSubmitMessage({ message: "New bug successfully entered.", messageType: "success", show: true });
            setNewBug(resetBugFields());
        } else {
            setSubmitMessage({ message: `Error creating bug. (${result})`, messageType: "failure", show: true });
        }
    }

    const submitBug = e => {
        e.preventDefault();
        db.submitBug(newBug, callback);
    }

    return (
        <div id="CreateBugForm">
            {submitMessage.show && <h1>{submitMessage.message}</h1>}
            <form onSubmit={submitBug}>
                <div>
                    <label htmlFor="bugTitle">Title:</label>
                    <input onChange={handleInput} type="text" id="bugTitle" name="bugTitle" value={newBug.bugTitle}></input>
                </div>
                <div>
                    <div><label htmlFor="bugDescription">Description:</label></div>
                    <textarea onChange={handleInput} id="bugDescription" name="bugDescription" value={newBug.bugDescription}></textarea>
                </div>
                <div className="flex">
                    <div>
                        <label htmlFor="bugCreatedDate">Creation Date:</label>
                        <input onChange={handleInput} type="text" id="bugCreatedDate" name="bugCreatedDate" value={newBug.bugCreatedDate}></input>
                    </div>
                    <div>
                        <label htmlFor="bugCreatedBy">Created By:</label>
                        <input onChange={handleInput} type="text" id="bugCreatedBy" name="bugCreatedBy" value={newBug.bugCreatedBy}></input>
                    </div>
                    <div>
                        <label htmlFor="bugAssignedTo">Assigned To:</label>
                        {/* <input onChange={handleInput} type="text" id="bugAssignedTo" name="bugAssignedTo" value={newBug.bugAssignedTo}></input> */}
                        <SelectUser onChange={ user => setNewBug( {...newBug, bugAssignedTo:user})} userList={props.userList} />
                    </div>
                    {/* <div>
                        <label htmlFor="bugAssignedTo">Assigned To:</label>
                        <input onChange={handleInput} type="text" id="bugAssignedTo" name="bugAssignedTo" value={newBug.bugAssignedTo}></input>
                    </div> */}
                    <div>
                        <label htmlFor="bugDueDate">Due Date:</label>
                        <input onChange={handleInput} type="date" id="bugDueDate" name="bugDueDate" value={newBug.bugDueDate}></input>
                    </div>
                </div>
                <label htmlFor="bugStatus">Status:</label>
                <input onChange={handleInput} type="text" id="bugStatus" name="bugStatus" value={newBug.bugStatus}></input>
                <label htmlFor="bugSeverity">Severity:</label>
                {/* <input onChange={handleInput} type="text" id="bugSeverity" name="bugSeverity" value={newBug.bugSeverity}></input> */}
                <SelectBugSeverityLevel onChange={bugLevel => setNewBug({...newBug, bugSeverity: bugLevel})} bugSeverityLevels={props.bugSeverityLevels} bugSeverity={newBug.bugSeverity}/>
                <label htmlFor="bugReproducibleFrequency">Reproducible Frequency:</label>
                <input onChange={handleInput} type="text" id="bugReproducibleFrequency" name="bugReproducibleFrequency" value={newBug.bugReproducableFrequency}></input>
                <div className="flex-right">
                    <Link to="/">
                        <input className="btn" type="button" value="Cancel" />
                    </Link>
                    <input className="btn" type="submit" value="Submit New Bug"></input>
                </div>
            </form>
        </div>
    )
}
