// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://www.youtube.com/watch?v=ri5Nqe_IK50
// https://medium.com/allenhwkim/mobile-friendly-table-b0cb066dbc0e

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BugListView from './components/BugListView';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CreateBug from './components/CreateBug';
import EditBug from './components/EditBug';
import * as dbBugs from '../src/backend/dbBugRequests';

import './App.css';

function App() {
  
  const [currentUserData, setCurrentUserData] = useState({ email: "a@gmail.com", pwd: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [bugList, setBugList] = useState([{id:''}]);  // default id to prevent "unique key prop" error
  const [userList, setUserList] = useState([]);
  const [bugSeverityLevels, setBugSeverityLevels] = useState([]);
  const [bugStatusStages, setBugStatusStages] = useState([]);

  console.log("App: userData", currentUserData);

  if (bugSeverityLevels.length === 0) {
    dbBugs.getBugSeverityLevels(async (levels) => {
      setBugSeverityLevels(levels);
    });
  }

  if (bugStatusStages.length === 0) {
    dbBugs.getBugStatusStages(async (stages) => {
      setBugStatusStages(stages);
    });
  }

  return (
    <div id="app">
      <Router>
      <Header 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={ authenticated => setIsAuthenticated(authenticated)} // enable user to log out
        currentUserData={currentUserData} 
      />
        <Switch>
          <Route exact path="/">
            { isAuthenticated
            // ? <CreateBug bugList={bugList} setBugList ={ newList => setBugList(newList)}/>
            ? <Dashboard 
                bugList={bugList} 
                setBugList= { newList => setBugList(newList)} 
                userList={userList} 
                setUserList={ users => setUserList(users)}
                bugSeverityLevels={bugSeverityLevels}
                bugStatusStages={bugStatusStages}
                />
            : <Login currentUserData={currentUserData} setCurrentUserData={ newData => {setCurrentUserData(newData)}} setIsAuthenticated={ newState => setIsAuthenticated(newState)} />
            }

          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/createBug">
            <CreateBug 
              // currentUser={}
              userList={userList} 
              bugSeverityLevels={bugSeverityLevels} 
              bugStatusStages={bugStatusStages}
            />
          </Route>
          <Route path="/bug/:id">
            {/* <Sidebar /> */}
            <EditBug 
              userList={userList} 
              bugSeverityLevels={bugSeverityLevels} 
              bugStatusStages={bugStatusStages}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
