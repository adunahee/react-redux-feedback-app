import React, { Component } from 'react'

class AdminTableItems extends Component {

    // this component is prop'd and array with values in order for id, feeling, understanding, 
    // support, comments, flagged, date

    buildRow = () => {
        return this.props.feedback.map((value) => {
            //skips row for flagged value
            if (value !== false) {
                return <td>{value}</td>
            } else { return null }
        })
    }

    render() {
        console.log(this.props.feedback);

        return (
            <tr>
                {this.buildRow()}
                <td>
                    <button>
                        Flag
                    </button>
                    <button>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default AdminTableItems;
