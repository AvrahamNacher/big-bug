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


import './App.css';

function App() {
  
  // const [ user, setUser ] = useState("Bob");
  const [userLoginData, setUserLoginData] = useState({ email: "", pwd: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [ bugList, setBugList ] = useState([{id:0}]);  // default id to prevent "unique key prop" error

  return (
    <div id="app">
      <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={ authenticated => setIsAuthenticated(authenticated)}/>
        <Switch>
          <Route exact path="/">
            { isAuthenticated
            // ? <CreateBug bugList={bugList} setBugList ={ newList => setBugList(newList)}/>
            ? <Dashboard bugList={bugList} setBugList= { newList => setBugList(newList)}/>
            : <Login userLoginData={userLoginData} setUserLoginData={ newData => {setUserLoginData(newData)}} setIsAuthenticated={ newState => setIsAuthenticated(newState)} />
            }

          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/createBug">
            <CreateBug />
          </Route>
          <Route path="/bug/:id">
            {/* <Sidebar /> */}
            <EditBug />
            {/* <BugListView bugList={bugList} setBugList ={ newList => setBugList(newList)}/> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
