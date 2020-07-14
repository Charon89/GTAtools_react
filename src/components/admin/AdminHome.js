import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getAllTools} from "../../redux/actions/toolsActions";
import {connect} from 'react-redux'
import './admin_css/AdminHomeStyles.css'
import AnimateHeight from 'react-animate-height';

const AdminHome = ({tools}) => {

    useEffect(() => {
        getAllTools();
    }, [])

    const [collapse, setcollapse] = useState(true);
    const [toolsheight, settoolsheight] = useState(0);

    const toggleToolsHeight = () => {
        settoolsheight(toolsheight === 0 ? 'auto' : 0);
    }

    return (
        <div className='container'>
            <div>
                <button className='btn' onClick={toggleToolsHeight}> {'>>'} Click here {'<<'}  </button>
                <AnimateHeight duration={500} height={toolsheight}>
                    <div>
                        <h1>Tools for tools ;)</h1>
                    </div>
                </AnimateHeight>
                <table>
                    <thead>
                    <tr>
                        <td>TITLE</td>
                        <td>PRICE</td>
                        <td>ACTIONS</td>
                    </tr>
                    </thead>
                    <tbody>

                    {tools.map(tool => (
                        <Fragment key={tool._id}>
                            <tr>
                                <td><p>{tool.title}</p></td>
                                <td>{tool.price}</td>
                                <td>
                                    <div>
                                        <i className="far fa-edit fa-2x"></i>
                                        <i className="far fa-times-circle fa-2x"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr className={collapse ? 'table-description open' : 'table-description closed'}>
                                <td>
                                        <div>
                                            <p>{tool.description}</p>
                                        </div>
                                </td>
                            </tr>
                        </Fragment>
                    ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

AdminHome.propTypes = {
    tools: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    tools: state.toolsReducer.tools
})

export default connect(mapStateToProps, {getAllTools})(AdminHome);
