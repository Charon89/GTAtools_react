import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ToolsList from "./components/tools/ToolsList";
import NavBar from "./components/NavBar";
import Routes from "./components/routing/Routes";
import {loadUser} from "./redux/actions/authActions";
import store from "./redux/store";

function App() {

    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);
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
