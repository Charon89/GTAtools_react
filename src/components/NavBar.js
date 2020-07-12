import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import logo from './assets/logo.png';
import {getCategories} from "../redux/actions/toolsActions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import DropDown from "./UI/DropDown";


const NavBar = ({toolsReducer: {categories}, getCategories}) => {

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const style = {
        logo: {
            maxWidth: '30%',
            minWidth: '70px',
        }
    }
    return (
        <div className='header-wrapper'>
            <div className='header-links'>
                <Link className='link' to="!#">Login</Link>
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
    );
};

NavBar.propTypes = {
    getCategories: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer
});

export default connect(mapStateToProps, {getCategories})(NavBar);
