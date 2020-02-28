import React, {useState} from 'react';
import * as db from '../backend/dbBugRequests';

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
    const [submitMessage, setSubmitMessage] = useState({message:"test", messageType: "success", show:true});

    const handleInput = e => {
        const { name, value } = e.target; // destructuring
        setNewBug( { ...newBug, [name]:value });
    }

    const callback = result => {
        if (result === '1') {
            // show success message
            setSubmitMessage({message: "New bug successfully created", messageType: "success", show: true });
            setNewBug(resetBugFields());
        } else {
            setSubmitMessage({message: `Error creating bug. (${result})`, messageType: "failure", show: true });
        }
    }

    const submitBug = e => {
        e.preventDefault();
        db.submitBug(newBug, callback);
    }

    return (
        <div>
            CREATE BUG
            {submitMessage.show && <h1>{submitMessage.message}</h1>}
            <form onSubmit={ submitBug }>
                <label htmlFor="bugTitle">Title:</label>
                <input onChange={ handleInput } type="text" id="bugTitle" name="bugTitle" value={newBug.bugTitle}></input>
                <label htmlFor="bugTitle">Description:</label>
                <input onChange={ handleInput } type="text" id="bugDescription" name="bugDescription" value={newBug.bugDescription}></input>
                <label htmlFor="bugTitle">Creation Date:</label>
                <input onChange={ handleInput } type="text" id="bugCreatedDate" name="bugCreatedDate" value={newBug.bugCreatedDate}></input>
                <label htmlFor="bugTitle">Created By:</label>
                <input onChange={ handleInput } type="text" id="bugCreatedBy" name="bugCreatedBy" value={newBug.bugCreatedBy}></input>
                <label htmlFor="bugTitle">Assigned To:</label>
                <input onChange={ handleInput } type="text" id="bugAssignedTo" name="bugAssignedTo" value={newBug.bugAssignedTo}></input>
                <label htmlFor="bugTitle">Due Date:</label>
                <input onChange={ handleInput } type="text" id="bugDueDate" name="bugDueDate" value={newBug.bugDueDate}></input>
                <label htmlFor="bugTitle">Status:</label>
                <input onChange={ handleInput } type="text" id="bugStatus" name="bugStatus" value={newBug.bugStatus}></input>
                <label htmlFor="bugTitle">Severity:</label>
                <input onChange={ handleInput } type="text" id="bugSeverity" name="bugSeverity" value={newBug.bugSeverity}></input>
                <label htmlFor="bugTitle">Repoducable Frequency:</label>
                <input onChange={ handleInput } type="text" id="bugReproducableFrequency" name="bugReproducableFrequency" value={newBug.bugReproducableFrequency}></input>
                <input type="submit" value="Submit New Bug"></input>
            </form>
        </div>
    )
}