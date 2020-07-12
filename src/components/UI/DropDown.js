import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import './UI_css/DropDownStyles.css'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getToolsByCategory} from "../../redux/actions/toolsActions";

const DropDown = ({name, items, getToolsByCategory}) => {

    const [toggle, setToggle] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const container = React.createRef();

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    });

    useEffect(() => {
        getToolsByCategory(selectedCategory);
    }, [getToolsByCategory, selectedCategory]);

    return (
        <div className="dropdown-container" ref={container}>
            <button type="button" className="dropdown-button" onClick={() => setToggle(!toggle)}>
                {name}
            </button>
            {toggle && (<div className="dropdown">
                <ul>
                    <Link to='/' className='dropdown-link'>
                        <li onClick={() => {
                            toggle && setToggle(false)
                        }}>All tools
                        </li>
                    </Link>
                    {items.length > 0 && (
                        items.map((item, index) => <Link key={index} onClick={() => {
                            toggle && setToggle(false);
                            setSelectedCategory(item);
                        }} className='dropdown-link' to={`/tools/${item}`}>
                            <li>> {item}</li>
                        </Link>)
                    )}
                </ul>
            </div>)}
        </div>
    );
};

DropDown.propTypes = {
    getToolsByCategory: PropTypes.func.isRequired,
    toolsReducer: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    toolsReducer: state.toolsReducer
});

export default connect(mapStateToProps, {getToolsByCategory})(DropDown);
