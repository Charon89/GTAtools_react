import React from 'react';
import {connect} from 'react-redux';
import {openLoginWindow} from "../../redux/actions/authActions";
import PropTypes from 'prop-types';
import './Login.css'

const Login = ({openLoginWindow}) => {

    return (
        <div className="login-container">
            <h1>LOGIN</h1>
            <h2 onClick={() => openLoginWindow()}>Close</h2>
        </div>
    );
};

Login.propTypes = {
    openLoginWindow: PropTypes.func.isRequired,
};

export default connect(null, {openLoginWindow})(Login);
