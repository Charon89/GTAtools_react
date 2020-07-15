import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {getAllTools} from "../../redux/actions/toolsActions";
import moment from "moment";
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        borderBottom: 'unset',
        backgroundColor: '#e3e3e3'
    },
    head: {
        backgroundColor: '#bebebe'
    },
    table: {
        width: '95%',
        margin: '0 auto',
        boxShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0), 0px 1px 13px -7px #000000'
    },
    open: {
        backgroundColor: '#ffffff'
    }
});

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            {!row ? ("LOADING") : (
                <Fragment>

                    <TableRow className={open ? classes.open : classes.root}>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <i className="far fa-caret-square-up fa-2x"></i> :
                                    <i className="far fa-caret-square-down fa-2x"></i>}
                            </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">{row.title}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box margin={1}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Details/Actions
                                    </Typography>
                                    <Table size="small" aria-label="Details">
                                        <TableHead>
                                            <TableRow>
                                                {/*HERE HISTORY TITLES*/}
                                                <TableCell align={"center"}>Date posted</TableCell>
                                                <TableCell align={"center"}>Quantity</TableCell>
                                                <TableCell align={"center"}>Views</TableCell>
                                                <TableCell align={"center"}>Actions</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                {/*HERE HISTORY DATA*/}
                                                <TableCell
                                                    align={"center"}>{moment(row.postDate).format('YYYY/MM/DD')}</TableCell>
                                                <TableCell align={"center"}>{row.quantity}</TableCell>
                                                <TableCell align={"center"}>{row.views}</TableCell>
                                                <TableCell align={"center"}>
                                                    <div  style={{display: 'flex', justifyContent: "space-around"}}>
                                                        <i className="far fa-edit fa-2x"></i>
                                                        <i className="far fa-times-circle fa-2x"></i>
                                                    </div>
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </Fragment>
            )}

        </React.Fragment>
    );
}

Row.propTypes = {};


const AdminHome = ({tools}) => {
    const classes = useRowStyles();
    useEffect(() => {
        getAllTools();
    }, [])

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow className={classes.head}>
                        <TableCell/>
                        <TableCell style={{fontSize:'1.4em'}}>Title</TableCell>
                        <TableCell style={{fontSize:'1.4em'}} align="center">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tools.map((tool) => (
                        <Row key={tool._id} row={tool}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

AdminHome.propTypes = {
    tools: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    tools: state.toolsReducer.tools
})

export default connect(mapStateToProps, {getAllTools})(AdminHome);
