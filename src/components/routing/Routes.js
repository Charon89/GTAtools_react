import React from 'react';
import {Route, Switch} from "react-router-dom";
import ToolView from '../tools/ToolView'
import NotFound from '../NotFound'


const Routes = () => {
    return (
        <section className="tools-list-wrapper">
            <Switch>
                <Route exact path='/tool/:id' component={ToolView}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </section>
    );
};

export default Routes;
