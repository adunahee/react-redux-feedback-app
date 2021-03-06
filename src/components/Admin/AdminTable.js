import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminTableItem from './../Admin/AdminTableItems.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Table.css';

class AdminTable extends Component {
    componentDidMount() {
        this.getServerFeedback();
    }

    getServerFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            // console.log(response.data);
            this.props.dispatch({ type: "STORE_FEEDBACK", payload: response.data })
            // this.setState({
            //     serverFeedback: this.props.reduxState.serverFeedback,
            // })
        }).catch((error) => {
            console.log('error in getFeedback', error);
        })
    }

    buildTableItems = () => {
        // console.log(this.props.reduxState.serverFeedback);
        return this.props.serverFeedback.map((feedback, index) => {
            return <AdminTableItem key={index} feedback={feedback} getServerFeedback={this.getServerFeedback}/>
        })
    }

    render() {
        return (
            <Paper className="root">
                <h2>Feedback from the Class</h2>
                <Table className="table">
                    <TableHead className="th">
                        <TableRow>
                            <TableCell className="th">ID</TableCell>
                            <TableCell className="th">Feeling</TableCell>
                            <TableCell className="th">Understanding</TableCell>
                            <TableCell className="th">Support</TableCell>
                            <TableCell className="th">Comments</TableCell>
                            <TableCell className="th">Change Status</TableCell>
                            <TableCell className="th">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.buildTableItems()}
                    </TableBody>
                    {/* <tfoot>
                        <tr>
                            <td>
                                metadata?
                      </td>
                        </tr>
                    </tfoot> */}
                </Table>

            </Paper>
        )
    }
}

const mapRStoProps = (reduxState) => ({ 
    serverFeedback: reduxState.serverFeedback
})

export default connect(mapRStoProps)(AdminTable);
