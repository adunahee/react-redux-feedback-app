import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'UPDATE_COMMENTS', payload: this.state})
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>What comments do you have for your instructors from today?</h2>
        <textarea placeholder='Write your response here.' onChange={this.handleChange}></textarea>
        <br/>
        <button type="submit">Next</button>
      </form>
    )
  }
}

export default connect()(Comments);
