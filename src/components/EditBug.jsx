import React, { useState } from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import SelectUser from './SelectUser';
import SelectBugSeverityLevel from './SelectBugSeverityLevel';
import SelectBugReproducibility from './SelectBugReproducibility';
import SelectBugStatus from './SelectBugStatus';
import UserDataField from './UserDataField';
import * as dbBugs from '../backend/dbBugRequests';

export default function EditBug(props) {
    const { pathname } = useLocation();
    const isCreateBug = pathname === "/createBug" ? true : false;
    function resetBugFields() {
        return (
            {
                id: "",
                bugTitle: "",
                bugDescription: "",
                bugCreatedDate: isCreateBug ? new Date().toISOString().split('T')[0] : "",
                bugCreatedBy: isCreateBug ? props.currentUserData.id : "",
                bugAssignedTo: "0",
                bugDueDate: "",
                bugStatus: "1",
                bugSeverity: "1",
                bugReproducibility: "1"
            }
        );
    }

    const [submitMessage, setSubmitMessage] = useState({ message: isCreateBug ? "Enter New Bug Details" : "Edit Bug Details", messageType: "success", show: true });
    const [newBug, setNewBug] = useState(resetBugFields());
    const { bugTitle, bugDescription, bugCreatedDate, bugCreatedBy, bugAssignedTo, bugDueDate, bugStatus, bugSeverity, bugReproducibility } = newBug; // destructuring
    const [isCreateBugState, setisCreateBugState] = useState(isCreateBug ? true : false);
    let history = useHistory();

    if (isCreateBug !== isCreateBugState) {
        console.log("change");
        setNewBug(resetBugFields());
        setisCreateBugState(isCreateBug ? true : false);
    }

    let { id } = useParams();

    const callback = response => {
        console.log(response);
        const bugDueDate = response.bugDueDate === '0001-01-01' ? "" : response.bugDueDate;
        setNewBug({
            id: response.id,
            bugTitle: response.bugTitle,
            bugDescription: response.bugDescription,
            bugCreatedDate: response.bugCreatedDate,
            bugCreatedBy: response.bugCreatedBy,
            bugAssignedTo: response.bugAssignedTo,
            bugDueDate: bugDueDate,
            bugStatus: response.bugStatus,
            bugSeverity: response.bugSeverity,
            bugReproducibility: response.bugReproducibility
        });
    }
    if (newBug.id === '' && !isCreateBug) { dbBugs.getBug(id, callback); }

    // console.log ("EditBug user = " + newBug.bugAssignedTo);
    // console.log("EditBug bugSeverityLevels ", props.bugSeverityLevels);

    const handleInput = e => {
        const { name, value } = e.target; // destructuring
        setNewBug({ ...newBug, [name]: value });
    }

    const updateCallback = response => {
        console.log("update callback: " + response);
    }

    const submitBugCallback = result => {
        if (result === '1') {
            setSubmitMessage({ message: "New bug successfully entered.", messageType: "success", show: true });
            setNewBug(resetBugFields());
            // setSubmitMessage( current => ({...current, message: "Enter New Bug Details"}))
        } else {
            setSubmitMessage({ message: `Error creating bug. (${result})`, messageType: "failure", show: true });
        }
    }

    const submitBug = e => {
        e.preventDefault();
        console.log("submit Bug");
        dbBugs.submitBug(newBug, submitBugCallback);
    }

    const updateBug = () => {
        console.log("update Bug");
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
            <div id="mainWindow" style={{ padding: '30px' }}>
                {submitMessage.show && <h1>{submitMessage.message}</h1>}
                <form>
                    <UserDataField field={"bugTitle"} value={bugTitle} onChange={handleInput} handleInput={handleInput} hasAutoFocus={true}>Title</UserDataField>

                    <div className="flexColumnContainer inputFieldPadding">
                        <label className="bold" htmlFor="bugDescription">Description:</label>
                        <textarea rows="4" className="centeredContainerInput" onChange={handleInput} id="bugDescription" name="bugDescription" value={bugDescription}></textarea>
                    </div>

                    {/* <div>
                        <div><label htmlFor="bugDescription">Description:</label></div>
                        <textarea onChange={handleInput} id="bugDescription" name="bugDescription" value={bugDescription}></textarea>
                    </div> */}
                    <div className="flexRowContainer">
                        <UserDataField field={"bugCreatedDate"} value={bugCreatedDate} handleInput={handleInput} hasAutoFocus={true}>Creation Date</UserDataField>

                        <SelectUser user={bugCreatedBy} userList={props.userList} onChange={user => setNewBug({ ...newBug, bugCreatedBy: user })}>Created By</SelectUser>
                        <SelectUser user={bugAssignedTo} userList={props.userList} onChange={user => setNewBug({ ...newBug, bugAssignedTo: user })}>Assigned To</SelectUser>

                        <div className="flexColumnContainer inputFieldPadding">
                            <label className="bold" htmlFor="bugDueDate">Due Date:</label>
                            <input className="centeredContainerInput" onChange={handleInput} type="date" id="bugDueDate" name="bugDueDate" value={bugDueDate}></input>
                        </div>
                    </div>
                    <div className="flexRowContainer">
                        <SelectBugStatus bugStatusStages={props.bugStatusStages} bugStatus={bugStatus} onChange={newStatus => setNewBug({ ...newBug, bugStatus: newStatus })} />
                        <SelectBugSeverityLevel onChange={bugLevel => setNewBug({ ...newBug, bugSeverity: bugLevel })} bugSeverityLevels={props.bugSeverityLevels} bugSeverity={bugSeverity}>Bug Severity</SelectBugSeverityLevel>
                        <SelectBugReproducibility onChange={bugLevel => {
                            console.log("buglevel = ", bugLevel);
                            setNewBug({ ...newBug, bugReproducibility: bugLevel });
                        }} bugReproducibilityOptions={props.bugReproducibilityOptions} bugReproducibility={bugReproducibility}>Bug Reproducibility</SelectBugReproducibility>
                        {/* <label htmlFor="bugReproducibleFrequency">Reproducible Frequency:</label>
                        <input onChange={handleInput} type="text" id="bugReproducibleFrequency" name="bugReproducableFrequency" value={bugReproducableFrequency}></input> */}
                    </div>

                    <div className="dividing-line-main" style={{ marginTop: '10px' }}></div>

                    <div className="flex-right">
                        <Link to="/">
                            <input className="centeredContainerButton tertiaryButton buttonEnabled" style={{ marginTop: '30px', marginRight: '60px', minWidth: '100px' }} type="button" value="Cancel" />
                        </Link>
                        <Link to="/">
                            <input onClick={deleteBug} className="centeredContainerButton tertiaryButton buttonEnabled" style={{ marginTop: '30px', marginRight: '60px', minWidth: '80px' }} type="button" value="Delete" />
                        </Link>
                        <Link to="/">
                            <input onClick={isCreateBug ? submitBug : updateBug} className="centeredContainerButton primaryButton buttonEnabled" type="button" value={isCreateBug ? "Submit New Bug" : "Update Bug"}></input>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
