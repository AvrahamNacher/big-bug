import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as dbBugs from '../backend/dbBugRequests';

export default function EditBug(props) {
    function resetBugFields() {
        return (
            {
                id: "",
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

    const [submitMessage, setSubmitMessage] = useState({ message: "Edit Bug Details", messageType: "success", show: true });
    const [newBug, setNewBug] = useState(resetBugFields());
    // const [newBug, setNewBug] = useState(resetBugFields());

    let { id } = useParams();
    // debugger;

    const callback = response => {
        console.log(response);
        setNewBug({
            id: response.id,
            bugTitle: response.bugTitle,
            bugDescription: response.bugDescription,
            bugCreatedDate: response.bugCreatedDate,
            bugCreatedBy: response.bugCreatedBy,
            bugAssignedTo: response.bugAssignedTo,
            bugDueDate: response.bugDueDate,
            bugStatus: response.bugStatus,
            bugSeverity: response.bugSeverity,
            bugReproducableFrequency: response.bugReproducableFrequency
        });
    }
    if (newBug.id === '') { dbBugs.getBug(id, callback); }

    const handleInput = e => {
        const { name, value } = e.target; // destructuring
        setNewBug({ ...newBug, [name]: value });
    }

    const updateCallback = response => {
        console.log("update callback: " + response);
    }

    const updateBug = () => {
        dbBugs.updateBug(newBug, updateCallback);
    }

    const deleteCallback = response => {
        console.log(response);
    }

    const deleteBug = () => {
        let SQL = `(id = ${id})`;
        console.log(`SQL = ${SQL}`);
        dbBugs.deleteBugs(SQL, deleteCallback);
    }

    return (
        <div>
            <div id="CreateBugForm">
                {submitMessage.show && <h1>{submitMessage.message}</h1>}
                <form onSubmit={updateBug}>
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
                            <input className="btn" type="button" value="Cancel" />
                        </Link>
                        <Link to="/">
                            <input onClick={deleteBug} className="btn" type="button" value="Delete" />
                        </Link>
                        <Link to="/">
                            <input onClick={updateBug} className="btn" type="button" value="Update Bug"></input>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}