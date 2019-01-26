import React, { Component } from 'react';
import RadioButtonForm from './RadioButtonForm';
import { connect } from 'react-redux';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: '',
        }
    }

    handleRadioChange = (number) => {
        this.setState({
            understanding: Number(number),
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_UNDERSTANDING', payload: this.state })
        this.props.history.push('/ongoing/support');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>How well did you understand today material?</h2>
                <RadioButtonForm handleRadioChange={this.handleRadioChange} />
                <br />
                <button type='submit'>Next</button>
            </form>
        )
    }
}

export default connect()(Understanding);