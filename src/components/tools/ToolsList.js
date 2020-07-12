import React, {Fragment, useEffect} from 'react';
import {getAllTools, getToolsByCategory} from "../../redux/actions/toolsActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ToolItem from "./ToolItem";
import Spinner from "../UI/Spinner";

const ToolsList = ({getAllTools, loading, toolsReducer: {tools}, match}) => {
    // useEffect(() => {
    //     getAllTools();
    // }, [getAllTools]);

    useEffect(() => {
        if (match.params.category) {
            getToolsByCategory(match.params.category);
        } else {
            getAllTools();
        }

    }, [getAllTools, getToolsByCategory, match.params.category]);

    return (
        <Fragment>
            {loading || tools === null ? (<Spinner/>) : (<div className='tools-list-wrapper'>
                {tools.map(tool => <Fragment key={tool._id}><ToolItem toolReducer={tool}/></Fragment>)}
            </div>)}
        </Fragment>
    );
};

ToolsList.propTypes = {
    getAllTools: PropTypes.func.isRequired,
    getToolsByCategory: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer
});


export default connect(mapStateToProps, {getAllTools, getToolsByCategory})(ToolsList);
