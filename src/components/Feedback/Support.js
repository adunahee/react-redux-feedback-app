import React, { Component } from 'react';
import RadioButtonForm from './RadioButtonForm';
import { connect } from 'react-redux';

class Support extends Component {
    constructor() {
        super();
        this.state = {
            support: '',
        }
    }

    handleRadioChange = (number) => {
        this.setState({
            support: Number(number),
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state });
        this.props.history.push('/comments');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Did you feel supported today?</h2>
                <RadioButtonForm handleRadioChange={this.handleRadioChange} />
                <br />
                <button type='submit'>Next</button>
            </form>
        )
    }
}

export default connect()(Support);