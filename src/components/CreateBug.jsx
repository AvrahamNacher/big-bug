import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as db from '../backend/dbBugRequests';

import './CreateBug.css';

export default function CreateBug(props) {

    function resetBugFields() {
        return (
            {
                bugTitle: "",
                bugDescription: "",
                bugCreatedDate: "",
                bugCreatedBy: "",
                bugAssignedTo: "",
                bugDueDate: "",
                bugStatus: "",
                bugSeverity: "",
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
            // show success message
            setSubmitMessage({ message: "New bug successfully created", messageType: "success", show: true });
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
                        <input onChange={handleInput} type="text" id="bugAssignedTo" name="bugAssignedTo" value={newBug.bugAssignedTo}></input>
                    </div>
                    <div>
                        <label htmlFor="bugDueDate">Due Date:</label>
                        <input onChange={handleInput} type="text" id="bugDueDate" name="bugDueDate" value={newBug.bugDueDate}></input>
                    </div>
                </div>
                <label htmlFor="bugStatus">Status:</label>
                <input onChange={handleInput} type="text" id="bugStatus" name="bugStatus" value={newBug.bugStatus}></input>
                <label htmlFor="bugSeverity">Severity:</label>
                <input onChange={handleInput} type="text" id="bugSeverity" name="bugSeverity" value={newBug.bugSeverity}></input>
                <label htmlFor="bugReproducableFrequency">Repoducable Frequency:</label>
                <input onChange={handleInput} type="text" id="bugReproducableFrequency" name="bugReproducableFrequency" value={newBug.bugReproducableFrequency}></input>
                <div className="flex-right">
                    <Link to="/">
                    <input className="btn" type="button" value="Cancel"/>
                    </Link>
                    <input className="btn" type="submit" value="Submit New Bug"></input>
                </div>
            </form>
        </div>
    )
}