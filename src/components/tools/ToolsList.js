import React, {Fragment, useEffect} from 'react';
import {getAllTools} from "../../redux/actions/toolsActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ToolItem from "./ToolItem";

const ToolsList = ({getAllTools, toolsReducer:{tools}}) => {
    useEffect(() => {
        getAllTools();
    }, [getAllTools]);

    return (
        <div className='tools-list-wrapper'>
            {tools.map(tool=><Fragment key={tool._id} ><ToolItem toolReducer={tool} /></Fragment>)}
        </div>
    );
};

ToolsList.propTypes = {
    getAllTools: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer
});


export default connect(mapStateToProps, {getAllTools})(ToolsList);
