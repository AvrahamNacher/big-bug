// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://www.youtube.com/watch?v=ri5Nqe_IK50
// https://medium.com/allenhwkim/mobile-friendly-table-b0cb066dbc0e

import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import BugListView from './components/BugListView';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Dashboard from './components/Dashboard';
import CreateBug from './components/CreateBug';
import EditBug from './components/EditBug';
import * as dbBugs from '../src/backend/dbBugRequests';

import './App.css';

function App() {
  
  const [loading, setLoading] = useState(true);  // TODO
  const [currentUserData, setCurrentUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [bugList, setBugList] = useState([{id:''}]);  // default id to prevent "unique key prop" error
  const [userList, setUserList] = useState([]);
  const [bugSeverityLevels, setBugSeverityLevels] = useState([]);
  const [bugStatusStages, setBugStatusStages] = useState([]);
  const [bugReproducibilityOptions, setBugReproducibilityOptions] = useState([]);
  
  // debugger;

  // function checkIfAuthenticated() {
  //   fetch("http://localhost:4000/user").then( x =>
  //     x.json().then( y => {
  //     setIsAuthenticated(true);
  //     // How to get Current User in React from JWT Cookie
  //     // https://www.youtube.com/watch?v=jsaOTcBe-dM
  //     setCurrentUserData( {} );
  //     setLoading(false);
  //     })
  //   );
  // }

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

  if (bugReproducibilityOptions.length === 0) {
    dbBugs.getBugReproducibilityOptions(async (options) => setBugReproducibilityOptions(options));
  }

  const logout = () => {  // TODO - SPA authentification
    // https://dev.to/rdegges/please-stop-using-local-storage-1i04
    // https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3
    // https://jcbaey.com/authentication-in-spa-reactjs-and-vuejs-the-right-way?utm_source=medium&utm_campaign=spa-authentication

    console.log("App: logging out");
    setIsAuthenticated(false);
    setCurrentUserData({});
    localStorage.setItem('userInfo', {'firstName': 'default', 'lastName': 'user'});
  }

// debugger;
  // if (loading) {
  //   // return <div>Loading...</div>
  // }

  return (
    <div id="app">
      <Router>
        <Header 
          isAuthenticated={isAuthenticated} 
          logout={ () => logout() }
          setIsAuthenticated={ authenticated => setIsAuthenticated(authenticated)} // enable user to log out
          currentUserData={currentUserData}
        />
        <Switch>
          <Route exact path={["/"]}>
            { isAuthenticated
            // ? <CreateBug bugList={bugList} setBugList ={ newList => setBugList(newList)}/>
            ? <Dashboard 
                bugList={bugList} 
                setBugList= { newList => setBugList(newList)} 
                userList={userList} 
                setUserList={ users => setUserList(users)}
                bugSeverityLevels={bugSeverityLevels}
                bugStatusStages={bugStatusStages}
                bugReproducibilityOptions={bugReproducibilityOptions}
                />
            : <Login 
                currentUserData={currentUserData} 
                setCurrentUserData={ newData => setCurrentUserData(newData)} 
                setIsAuthenticated={ newState => setIsAuthenticated(newState)} />
            }

          </Route>
          <Route path={["/register", "/settings"]}>
            <UserDetails 
              currentUserData={currentUserData} 
              setCurrentUserData={ newData => setCurrentUserData(newData)} 
              setIsAuthenticated={ authenticated => setIsAuthenticated(authenticated)} />
          </Route>
          <Route path={["/createBug", "/bug/:id"]}>
            {/* <Sidebar /> */}
            <EditBug 
              userList={userList} 
              bugSeverityLevels={bugSeverityLevels} 
              bugStatusStages={bugStatusStages}
              bugReproducibilityOptions={bugReproducibilityOptions}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
