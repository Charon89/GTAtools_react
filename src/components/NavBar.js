import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from './assets/logo.png';
import {getCategories} from "../redux/actions/toolsActions";
import {openLoginWindow} from "../redux/actions/authActions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import DropDown from "./UI/DropDown";
import Login from "./auth/Login";

const NavBar = ({toolsReducer: {categories}, getCategories, authReducer:{loginOpener},openLoginWindow}) => {

    useEffect(() => {
        getCategories();
    }, [getCategories]);


    const style = {
        logo: {
            maxWidth: '30%',
            minWidth: '70px',
        }
    }

    return (<Fragment>
            {loginOpener && (<Login/>)}
        <div className='header-wrapper'>
            <div className='header-links'>
                <h4 className='login-opener' onClick={()=>openLoginWindow()}>Login</h4>
            </div>
            <div className='header-grid'>
                <div><img style={style.logo} src={logo} alt="Logo"/></div>
                <div>
                    <form action=""><input type="text" placeholder='Search'/></form>
                </div>
                <div></div>
            </div>
            <div className='categories-wrapper'>
                <div>
                    <DropDown name='Categories' items={categories}/>
                    <h6 className='ma-1'>Contact</h6>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

NavBar.propTypes = {
    getCategories: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
    openLoginWindow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer,
    authReducer: state.authReducer
});

export default connect(mapStateToProps, {getCategories, openLoginWindow})(NavBar);
