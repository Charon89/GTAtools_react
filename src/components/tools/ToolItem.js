import React from 'react';
import moment from "moment";
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

// :{tool:{_id}}
// :{_id, title, price, category, description, createdAt, photos:{photoSmall, photoLarge}}
const ToolItem = ({toolReducer}) => {
    const {_id, title, price, description, createdAt} = toolReducer;
    const [...allPhotos] = toolReducer.photos;
    const history = useHistory();
    return (
        <div className='tool-list-item' onClick={()=>history.push(`tool/${_id}`)}>
            <div>
                <img src={allPhotos[0].photoSmall} alt="title"/>
            </div>
            <div>
                <div>
                    <small>{moment(createdAt).startOf('hour').fromNow()}</small>
                    <h1>{title}</h1>
                    <hr className='sm-hide ma-1'/>
                </div>

                <p className='sm-hide'>{description}</p>
                <div>
                </div>
            </div>
            <div>
                <h4>Buy: ${price}</h4>
                <h4>Rent: ${price}</h4>
            </div>
        </div>
    );
};

ToolItem.propTypes = {
    toolReducer: PropTypes.object.isRequired,
};


export default ToolItem;
