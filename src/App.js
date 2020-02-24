// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
// https://www.youtube.com/watch?v=ri5Nqe_IK50
// https://medium.com/allenhwkim/mobile-friendly-table-b0cb066dbc0e

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BugListView from './components/BugListView';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  
  // const [ user, setUser ] = useState("Bob");
  const [userLoginData, setUserLoginData] = useState({ email: "", pwd: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [ bugList, setBugList ] = useState([{}]);

  const [ oldBugList, setOldBugList ] = useState([
    { 
      id: "dc-12", 
      category: "ui",
      title: "Formatting error in header",
      description: "1. Go to home page. 2. Click New Item. 3. Text spacing is irregular.",
      files: "https://www.google.com/text.jpg",
      created: "01-05-2000",
      reporter: "Butch Casidy",
      assigned: "Taylor Swift",
      due: "01-07-2020",
      status: "open",
      severity: "minor",
      reproducable: 210
    },
    { 
      id: "dc-13", 
      category: "",
      title: "Save option doesn't save",
      description: "1. Go to home page. 2. Click New Item. 3. Text spacing is irregular.",
      files: "https://www.google.com/text.jpg",
      created: "01-06-2000",
      reporter: "Harrison Ford",
      assigned: "Billy King",
      due: "01-08-2020",
      status: "in progress",
      severity: "major",
      reproducable: 21
    },
    { 
      id: "dc-14", 
      category: "UX",
      title: "Print option opens save window",
      description: "1. Go to home page. 2. Click New Item. 3. Text spacing is irregular.",
      files: "https://www.google.com/text.jpg",
      created: "01-04-2000",
      reporter: "Steven Spielberg",
      assigned: "Rodger Rabbit",
      due: "01-10-2020",
      status: "complete",
      severity: "major",
      reproducable: 26
    },
    { 
      id: "dc-15", 
      category: "speed",
      title: "Load time is over 10 seconds",
      description: "1. Go to home page. 2. Click New Item. 3. Text spacing is irregular.",
      files: "https://www.google.com/text.jpg",
      created: "01-04-2000",
      reporter: "Margaret Thatcher",
      assigned: "Anne Gable",
      due: "01-04-2020",
      status: "in progress",
      severity: "major",
      reproducable: 15
    }
  ])

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/">
            { isAuthenticated
            ? <Dashboard bugList={bugList} setBugList= { newList => setBugList(newList)}/>
            : <Login userLoginData={userLoginData} setUserLoginData={ newData => {setUserLoginData(newData)}} setIsAuthenticated={ newState => setIsAuthenticated(newState)} />
            }
            
            
  
            {/* <Register /> */}

          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path={["/bug/"]}>
            {/* <Header user={user}/> */}
            <Sidebar />
            Bug
            <BugListView bugList={bugList} setBugList ={ newList => setBugList(newList)}/>
          </Route>
          {/* <Route path="/bug/">
          </Route> */}
        </Switch>
      </Router>



    </div>
  );
}

export default App;
