import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    const styles = {
        center:{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            height: '300px',
            fontSize:'2em',
            flexDirection:'column'
        }
    }
    return (
        <div style={styles.center}>
            <i className="fas fa-exclamation-triangle fa-3x"></i>
            <h1>{' '}Page not found</h1>
            <h2>This is not the page you're looking for.</h2>
            <Link to='/'>Main page</Link>
        </div>
    );
};

export default NotFound;
