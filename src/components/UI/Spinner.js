import React from 'react';
import spinner from '../assets/spinner.gif'
const Spinner = () => {
    return (
        <div className='container' style={{textAlign: 'center'}}>
        <img src={spinner} alt="Spinner"/>
        </div>
    );
};

export default Spinner;
