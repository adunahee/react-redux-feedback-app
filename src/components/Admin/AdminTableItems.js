import React, { Component } from 'react'
import Axios from 'axios';

class AdminTableItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackArr: Object.values(this.props.feedback),
        }
    }

    buildRow = () => {
        return this.state.feedbackArr.map((value, i) => {
            //skips row for flagged value
            if (typeof value !== "boolean") {
                return <td key={i}>{value}</td>
            } else { return null }
        })
    }

    rowFlagged = () => {
        //in unflagged return true
        if(this.state.feedbackArr.includes(false)){
            return "unflagged";
        } else if (this.state.feedbackArr.includes(true)) {
            return "flagged";
        }
    }

    handleFlag = () => {
        const flagStatus = this.props.feedback.flagged;
        Axios({
            method: 'PUT',
            url: `/feedback/${this.props.feedback.id}`,
        }).then( (response) => {
            this.props.getServerFeedback();
            if (flagStatus === true){
                alert('Feedback unflagged.')
            } else if (flagStatus === false){
                alert('Feedback flagged.')
            }
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
                <td>
                    <button onClick={this.handleFlag}>
                        Flag
                    </button>
                    <button onClick={this.handleDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default AdminTableItems;
