import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminTableItem from './../Admin/AdminTableItems.js';

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
        }).catch((error) => {
            console.log('error in getFeedback', error);
        })
    }

    buildTableItems = () => {
        // console.log(this.props.reduxState.serverFeedback);
        return this.props.reduxState.serverFeedback.map((feedback, index) => {
            return <AdminTableItem key={index} feedback={feedback} getServerFeedback={this.getServerFeedback}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Admin View of Feedback</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Time Submitted</th>
                            <th>Flag or Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.buildTableItems()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                metadata?
                      </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

const mapRStoProps = (reduxState) => ({ reduxState })

export default connect(mapRStoProps)(AdminTable);
