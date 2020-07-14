import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = (
    {
        component: Component,
        auth: {isAuthenticated, loading},
        ...rest
    }) => (
    <Route {...rest}
           render={
               props =>
                   !isAuthenticated ? (
                       <Redirect
                           to='/'/>) : (
                       <Component {...props}/>)
           }/>);

PrivateRoute.propTypes = {};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(PrivateRoute);
