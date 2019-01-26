import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackSummary extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>You are feeling {this.props.reduxState.clientFeedback.feeling} out of 5.</li>
                    <li>You are understand {this.props.reduxState.clientFeedback.understanding} out of 5. </li>
                    <li>You feel supported You are feeling {this.props.reduxState.clientFeedback.support} out of 5.</li>
                    <li>The comment you want to share with your instructors is, '{this.props.reduxState.clientFeedback.comments}'</li>
                </ul>
            </div>
        )
    }
}

const mapRStoProps = (reduxState) => {
    return { reduxState: reduxState }
}

export default connect(mapRStoProps)(FeedbackSummary);
