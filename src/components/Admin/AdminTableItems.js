import React, { Component } from 'react'
import Axios from 'axios';

class AdminTableItems extends Component {
    buildRow = () => {
        //array of values id, feeling, understanding, support, comments, flagged, date
        const feedbackArr = Object.values(this.props.feedback);
        //returns array with td according to data type
        return (
            feedbackArr.map((value, i) => {
                //returns td when numeric or string value
                if (typeof value !== "boolean") {
                    return <td key={i}>{value}</td>
                    //if flag status value, conditionally renders td with button
                } else if (typeof value === "boolean") {
                    let buttonName = '';
                    if (value === false) {
                        buttonName = 'Flag';
                    } else { buttonName = 'Unflag' }
                    return (<td key={i}>
                        <button onClick={this.handleFlag}>
                            {buttonName}
                        </button>
                        <button onClick={this.handleDelete}>
                            Delete
                    </button>
                    </td>)
                }
            }))
    }

    rowFlagged = () => {
        //if flagged true, make bg color yellow 
        if (this.props.feedback.flagged) {
            return "flagged";
        } else {
            return "unflagged";
        }
    }

    handleFlag = () => {
        //removed alert because felt clunky, works though
        // const flagStatus = this.props.feedback.flagged;
        Axios({
            method: 'PUT',
            url: `/feedback/${this.props.feedback.id}`,
        }).then((response) => {
            this.props.getServerFeedback();
            // if (flagStatus === true) {
            //     alert('Feedback unflagged.')
            // } else if (flagStatus === false) {
            //     alert('Feedback flagged.')
            // }
        }).catch(error => {
            console.log(`error flagging feedback`, error);
            alert('Unable to flag feedback at this time.');
        })
    }

    handleDelete = () => {
        let confirmation = window.confirm('Are you sure you want to delete this feedback?');
        if (confirmation) {
            Axios({
                method: 'DELETE',
                url: `/feedback/${this.props.feedback.id}`
            }).then(response => {
                this.props.getServerFeedback();
            }).catch(error => {
                alert('Could not update feedback at this time.')
            })
        } else {
            alert('User feedback was not deleted.')
        }

    }

    render() {
        // console.log(this.props.feedback);
        return (
            <tr className={this.rowFlagged()}>
                {this.buildRow()}
            </tr>
        )
    }
}

export default AdminTableItems;
