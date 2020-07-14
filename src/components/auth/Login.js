import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {openLoginWindow, login} from "../../redux/actions/authActions";
import PropTypes from 'prop-types';
import './Login.css'

const Login = ({openLoginWindow, login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });
    const {userName, password} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        login(userName, password);
    };

    if(isAuthenticated){
        return <Redirect to="/admin"/>
    }

    return (
        <div className="login-container">
            <div>

                <form className='login-form' onSubmit={e => onSubmit(e)}>
                    <h1>ADMIN LOGIN</h1>
                    <hr/>
                    <label htmlFor="login">Login</label>
                    <input type="text" name='userName' required onChange={e => onChange(e)} value={userName}/>

                    < label htmlFor="password">Password </label>
                    <input type="password" name='password' required onChange={e => onChange(e)} value={password}/>

                    <div>
                        <button className='btn ' onClick={() => openLoginWindow()}>
                            <i className="far fa-times-circle"></i><p className='btnText'>&nbsp;Close</p>
                        </button>
                        <button className='btn green ' type='submit'><i className="fas fa-sign-in-alt"></i> <p
                            className='btnText'>Login </p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    openLoginWindow: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, {openLoginWindow, login})(Login);
