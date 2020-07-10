import React from 'react';
import {useHistory} from 'react-router-dom';

const GoButton = ({where ='/', icon = '', name='GoButton'}) => {
    const history = useHistory();

    const handleClick = () => {
        if(where ==='goBack') {
            history.goBack();
        }
        history.push(`${where}`);
    }
    return (
        <button type='button' className='btn regular' onClick={handleClick}><i className={icon} ></i>{' '}{name}</button>
    );
};

export default GoButton;
