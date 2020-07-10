import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ToolsList from "./components/tools/ToolsList";
import NavBar from "./components/NavBar";
import Routes from "./components/routing/Routes";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={ToolsList}/>
                <Route component={Routes}/>
            </Switch>

        </Router>
    );
}

export default App;
