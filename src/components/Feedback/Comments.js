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
        this.props.history.push('/ongoing');
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Optional: Please share any comments you have for instructor.</h2>
        <textarea placeholder='Write your response here.' onChange={this.handleChange}></textarea>
        <br/>
        <button type="submit">Next</button>
      </form>
    )
  }
}

export default connect()(Comments);
