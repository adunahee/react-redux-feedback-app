import React, { Component } from 'react';
import {connect} from 'react-redux';

class BeginFeedback extends Component {

    startFeedback = () => {
        this.props.history.push('/feeling');
    }

  render() {
    return (
      <div>
        <h2>Are you ready to begin feedback?</h2>
        <button onClick={this.startFeedback}>Yes!</button>
      </div>
    )
  }
}

export default connect()(BeginFeedback);
