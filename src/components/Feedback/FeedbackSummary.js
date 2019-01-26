import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class FeedbackSummary extends Component {

    handleSubmitClick = () => {
        Axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.clientFeedback,
        }).then((response) => {
            this.props.history.push('/submitted');
        }).catch((error) => {
            alert(`We could not submit your feedback at this time. Please contact your instructor.`);
            console.log(error);
        })
    }

    conditionalButton = () => {
        const feedbackValues = Object.values(this.props.reduxState.clientFeedback);
        if (feedbackValues.every((value) => { return value !== null })) {
            return <button onClick={this.handleSubmitClick}>Submit Feedback</button>
        } else {
            return <button disabled>Incomplete Survey</button>
        }
    }

    conditionalSummary = () => {
        const fullSummary = [
            <li key={0}>Feeling: {this.props.reduxState.clientFeedback.feeling} out of 5</li>,
            <li key={1}>Understanding: {this.props.reduxState.clientFeedback.understanding} out of 5</li>,
            <li key={2}>Staff Support: {this.props.reduxState.clientFeedback.support} out of 5</li>,
            <li key={3}>Additional Comment: {this.props.reduxState.clientFeedback.comments}</li>,
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
        // console.log(this.props.reduxState.clientFeedback);
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
