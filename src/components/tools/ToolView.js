import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTool} from "../../redux/actions/toolsActions";

const ToolView = ({getTool, match, toolsReducer: {tool, loading}}) => {

    useEffect(() => {
        getTool(match.params.id);
    }, [getTool, match.params.id]);

    const styles = {
        main: {
            width: "90%",
            padding: '10px 0',
            backgroundColor: '#fafafa',
            margin: '1em auto',
            boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0), 0px 5px 13px -7px #000000',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        rowSpan: {
            gridColumn: 'span 3',
            textAlign: 'center'
        },
        imageContainer:{
          display: 'flex',
            justifyContent:'center'
        },
        image:{
            width: '100%',
            height: 'auto',
            maxWidth: '500px'
        }
    }

    return (<Fragment>
            {tool == null ? "Loading" : (
                <div className='container'>
                    <div style={styles.main}>
                        {/*<h1 style={styles.rowSpan}>{tool.title}</h1>*/}
                        <div style={styles.imageContainer}>
                            <img style={styles.image} src={tool.photos[0].photoLarge} alt={tool.title}/>
                        </div>
                        <div>
                            <h1>{tool.title}</h1>
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
