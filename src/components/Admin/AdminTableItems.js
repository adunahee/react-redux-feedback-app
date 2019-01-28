import React, { Component } from 'react'
import Axios from 'axios';

class AdminTableItems extends Component {
    constructor(props) {
        super(props);
    }



    buildRow = () => {
        //array of values id, feeling, understanding, support, comments, flagged, date
        const feedbackArr = Object.values(this.props.feedback);
        return feedbackArr.map((value, i) => {
            //skips row for flagged value
            if (typeof value !== "boolean") {
                return <td key={i}>{value}</td>
            } else if (typeof value === "boolean") {
                let buttonName = '';
                if (value === false) {
                    buttonName = 'Flag';
                } else { buttonName = 'Unflag'}
                return <td>
                    <button onClick={this.handleFlag}>
                        {buttonName}
                    </button>
                    <button onClick={this.handleDelete}>
                        Delete
                    </button>
                </td>
            }
        })
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
        const flagStatus = this.props.feedback.flagged;
        Axios({
            method: 'PUT',
            url: `/feedback/${this.props.feedback.id}`,
        }).then((response) => {
            this.props.getServerFeedback();
            //removed alert because felt clunky, works though
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
