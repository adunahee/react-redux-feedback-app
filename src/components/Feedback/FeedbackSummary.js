import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackSummary extends Component {

    conditionalButton = () => {
        const feedbackValues = Object.values(this.props.reduxState.clientFeedback);
        if (feedbackValues.every((value) => { return value !== null })) {
            return <button onClick={this.handleFeedbackPost}>Submit Feedback</button>
        } else {
            return <button disabled onClick={this.handleFeedbackPost}>Incomplete Survey</button>
        }
    }

    conditionalSummary = () => {
        const fullSummary = [
            <li>Feeling: {this.props.reduxState.clientFeedback.feeling} out of 5.</li>,
            <li>Understanding: {this.props.reduxState.clientFeedback.understanding} out of 5. </li>,
            <li>Staff Support: {this.props.reduxState.clientFeedback.support} out of 5.</li>,
            <li>Additional Comment: {this.props.reduxState.clientFeedback.comments}</li>,
        ]

        switch (this.props.history.location.pathname) {
            //removes all but last filled out portion based on location in form
            case '/ongoing/feeling':
                return <li>Awaiting first submission.</li>;
            case '/ongoing/understanding':
                fullSummary.splice(1);
                return fullSummary;
            case '/ongoing/support':
                fullSummary.splice(2)
                return fullSummary;
            case '/ongoing/comments':
                fullSummary.splice(3);
                return fullSummary;
            case '/ongoing':
                return fullSummary;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <h2>Feedback Survey Summary</h2>
                <p>This will update as you progress.</p>
                <ul>
                    {this.conditionalSummary()}
                </ul>
                {this.conditionalButton()}
            </div>
        )
    }
}

const mapRStoProps = (reduxState) => {
    return { reduxState: reduxState }
}

export default connect(mapRStoProps)(FeedbackSummary);
