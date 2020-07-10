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

    const style={
        shiftRight:{
            display:'flex',
            justifyContent:'flex-end'
        }
    }

    return (<Fragment>
            {tool == null ? "Loading" : (
                <div className='container'>
                    <div className='tool-view-main'>
                        <div className='tool-view-rowSpan ma-1'><GoButton icon='fas fa-arrow-circle-left' name='Go Back'/>
                        </div>
                        {/*<h1 style={styles.rowSpan}>{tool.title}</h1>*/}
                        <div className='tool-view-imageContainer'>
                            <img className='tool-view-image' src={tool.photos[0].photoLarge} alt={tool.title}/>
                        </div>
                        <div className='tool-view-descContainer'>
                            <h1>{tool.title}</h1>
                            <small>{moment(tool.postDate).startOf('hour').fromNow()}</small>
                            <h2 style={style.shiftRight}>Buy ${tool.price} CAD</h2>
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
