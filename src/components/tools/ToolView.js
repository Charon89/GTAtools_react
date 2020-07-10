import React, {Fragment, useEffect, useState} from 'react';
import GoButton from "../UI/GoButton";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTool} from "../../redux/actions/toolsActions";
import moment from "moment";

const ToolView = ({getTool, match, toolsReducer: {tool, loading}}) => {

    useEffect(() => {
        getTool(match.params.id);
    }, [getTool, match.params.id]);

    const [index, setIndex] = useState(0);

    const style = {
        shiftRight: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }

    return (<Fragment>
            {tool == null ? "Loading" : (
                <div className='container'>
                    <div className='tool-view-main'>
                        <div className='tool-view-rowSpan ma-1'>
                            <GoButton icon='fas fa-arrow-circle-left' name='Go Back'/>
                        </div>
                        <div className='tool-view-imageContainer'>
                            <img className='tool-view-image pa-2 ' src={tool.photos[index].photoLarge}
                                 alt={tool.title}/>
                            <div className='ma-2'>
                                {tool.photos.map((photo, index) =>
                                    <img className='pa-1' onClick={() => setIndex(index)}
                                         key={photo._id}
                                         src={photo.photoSmall}
                                         alt={photo.photoSmall}
                                    />)}
                            </div>
                        </div>
                        <div className='tool-view-descContainer'>
                            <h1 className='ma-1'>
                                {tool.title}
                            </h1>
                            <small className='tool-view-fjustify'><i className="far fa-calendar-alt"></i>
                                &nbsp;{moment(tool.postDate).startOf('hour').fromNow()} &nbsp;&nbsp;
                                <i className="fas fa-eye"></i>&nbsp;{tool.views}
                            </small>
                            <h2 style={style.shiftRight}>
                                Buy ${tool.price} CAD
                            </h2>
                            {tool.rent && (<h2>Rent ${tool.rent} CAD</h2>)}
                            <div>
                                <h2>Description</h2>
                                <p>{tool.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </Fragment>

    );
};

ToolView.propTypes = {
    getTool: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer
})

export default connect(mapStateToProps, {getTool})(ToolView);
