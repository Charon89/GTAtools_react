import React, {Fragment} from 'react';
import moment from "moment";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ToolItem = ({toolReducer}) => {
    const {_id, title, price, description, views, createdAt, category} = toolReducer;
    const [...allPhotos] = toolReducer.photos;

    return (
        <Fragment>
            <Link to={`/tool/${_id}`} style={{textDecoration: "none", color:"#000"}}>
                <div className='tool-list-item' >
                    <div>
                        <img src={allPhotos[0].photoSmall} alt="title"/>
                    </div>
                    <div>
                        <div>
                            <small className='tool-view-fjustify'><i className="far fa-calendar-alt"></i>
                                &nbsp;{moment(createdAt).startOf('hour').fromNow()} &nbsp;&nbsp;
                                <i className="fas fa-eye"></i>&nbsp;{views}&nbsp;&nbsp;<i className="fas fa-map-signs"></i>&nbsp;{category}
                            </small>
                            <div>
                                <h1>{title}</h1>
                            </div>
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
            </Link>
        </Fragment>
    );
};

ToolItem.propTypes = {
    toolReducer: PropTypes.object.isRequired,
};


export default ToolItem;
