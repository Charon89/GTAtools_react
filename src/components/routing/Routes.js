import React from 'react';
import {Route, Switch} from "react-router-dom";
import ToolView from '../tools/ToolView'
import NotFound from '../NotFound'
import ToolsList from "../tools/ToolsList";
import AdminHome from '../admin/AdminHome';
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return (
        <section className="tools-list-wrapper">
            <Switch>
                <Route exact path='/tool/:id' component={ToolView}/>
                <Route exact path='/tools/' component={ToolsList}/>
                <Route exact path='/tools/:category' component={ToolsList}/>
                <PrivateRoute exact path='/admin' component={AdminHome}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </section>
    );
};

export default Routes;
