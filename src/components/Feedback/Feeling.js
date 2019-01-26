import React, { Component } from 'react';
import RadioButtonForm from './RadioButtonForm';
import { connect } from 'react-redux';

class Feeling extends Component {
    constructor() {
        super();
        this.state = {
            feeling: '',
        }
    }

    handleRadioChange = (number) => {
        this.setState({
            feeling: Number(number),
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state });
        this.props.history.push('/ongoing/understanding');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>How are you feeling today?</h2>
                <RadioButtonForm handleRadioChange={this.handleRadioChange} />
                <br />
                <button type='submit'>Next</button>
            </form>
        )
    }
}

export default connect()(Feeling);