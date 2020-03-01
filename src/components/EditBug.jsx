import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function EditBug(props) {
    const [submitMessage, setSubmitMessage] = useState({ message: "Edit Bug Details", messageType: "success", show: true });
    const [newBug, setNewBug] = useState([]);
    // const [newBug, setNewBug] = useState(resetBugFields());

    let { id } = useParams();

    const handleInput = e => {
        const { name, value } = e.target; // destructuring
        setNewBug({ ...newBug, [name]: value });
    }
    
    return (
        <div>
            Bug # {id}!
            <div id="CreateBugForm">
                {submitMessage.show && <h1>{submitMessage.message}</h1>}
                <form>
                {/* <form onSubmit={submitBug}> */}
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
                        <input className="btn" type="submit" value="Submit New Bug"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}