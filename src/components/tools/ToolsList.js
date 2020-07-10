import React, {useEffect} from 'react';
import {getAllTools} from "../redux/actions/toolsActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const ToolsList = ({getAllTools, toolsReducer:{tools}}) => {
    useEffect(() => {
        getAllTools();
    }, [getAllTools]);
    return (
        <div>Tools:
            {tools.map(tool=><p key={tool._id}>{tool.photos[0].photoSmall}</p>)}
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
