import React from 'react';
import {Link} from "react-router-dom";
import logo from './assets/logo.png';

const NavBar = () => {
    const style = {
        logo: {
            maxWidth: '50%',
            minWidth: '70px',
        }
    }
    return (
        <div className='header-wrapper'>
            <div className='header-links'>
                <Link className='link' to="!#">Login</Link>
                <Link className='link' to="!#">Register</Link>
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
                    <h6 className='ma-1'><Link className='link' to='!#'> Categories</Link></h6>
                    <h6 className='ma-1'>Contact</h6>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
