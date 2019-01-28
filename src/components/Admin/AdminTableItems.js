import React, { Component } from 'react'
import Axios from 'axios';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import ReportIcon from '@material-ui/icons/Report';
import ReportOffIcon from '@material-ui/icons/ReportOff';

class AdminTableItems extends Component {
    buildRow = () => {
        //array of values id, feeling, understanding, support, comments, flagged, date
        const feedbackArr = Object.values(this.props.feedback);
        //returns array with td according to data type
        return (
            feedbackArr.map((value, i) => {
                //returns td when numeric or string value
                if (typeof value !== "boolean") {
                    return <TableCell className="cell" key={i}>{value}</TableCell>
                    //if flag status value, conditionally renders td with button
                } else if (typeof value === "boolean") {
                    let buttonIcon = '';
                    if (value === false) {
                        buttonIcon = <ReportIcon />;
                    } else { buttonIcon = <ReportOffIcon /> }
                    return (
                    <TableCell className="cell" key={i}>
                        <Button onClick={this.handleFlag} variant="contained" className="button">
                            {buttonIcon}
                        </Button>
                            <Button onClick={this.handleDelete} variant="contained" color="secondary" className="button">
                           <DeleteIcon />
                        </Button>
                    </TableCell>)
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
            <TableRow className={this.rowFlagged()}>
                {this.buildRow()}
            </TableRow>
        )
    }
}

export default AdminTableItems;
