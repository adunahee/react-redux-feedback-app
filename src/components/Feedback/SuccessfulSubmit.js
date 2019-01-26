import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuccessfulSubmit extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'RESET_CLIENT'});
        this.props.history.push('/ongoing/feeling');
    }

  render() {
    return (
      <div>
        <h2>Feedback Successfully Submitted!</h2>
        <p>Thank you.  Your instructor will review your feedback and reach out as needed.</p>
        <button onClick={this.handleClick}>Submit More Feedback</button>
      </div>
    )
  }
}

export default connect()(SuccessfulSubmit);
