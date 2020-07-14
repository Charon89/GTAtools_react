import React, {Fragment, useEffect} from 'react';
import logo from './assets/logo.png';
import {Link, useHistory} from "react-router-dom";
import {getCategories} from "../redux/actions/toolsActions";
import {openLoginWindow, logout} from "../redux/actions/authActions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import DropDown from "./UI/DropDown";
import Login from "./auth/Login";

const NavBar = ({toolsReducer: {categories}, getCategories, authReducer: {loginOpener, isAuthenticated, user}, logout, openLoginWindow}) => {

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const history = useHistory();

    const style = {
        logo: {
            maxWidth: '30%',
            minWidth: '70px',
        }
    }

    return (<Fragment>
            {(loginOpener) && (<Login/>)}
            <div className='header-wrapper'>
                <div className='header-links'>
                    {isAuthenticated ? (
                        <Fragment>
                            <Link className='login-opener' to='/admin'>
                                <h4 className='login-opener' style={{color: 'red'}}>
                                    <i className="fas fa-lock-open"></i>&nbsp;
                                    {localStorage.username}
                                </h4>
                            </Link>

                            &nbsp;&nbsp;&nbsp;

                            <h4 className='login-opener' onClick={() => {
                                logout();
                                openLoginWindow();
                            }}> Logout</h4>
                        </Fragment>
                    ) : (
                        <h4 className='login-opener' onClick={() => openLoginWindow()}>
                            <i className="fas fa-lock"></i>
                            &nbsp;Login
                        </h4>
                    )}
                </div>
                <div className='header-grid'>
                    <div> <img onClick={()=>history.push('/')} style={style.logo} src={logo} alt="Logo"/></div>
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
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer,
    authReducer: state.authReducer,
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, {getCategories, openLoginWindow, logout})(NavBar);
