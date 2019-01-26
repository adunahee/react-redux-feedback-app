import React, { Component } from 'react'

class RadioButtonForm extends Component {

    handleChange = (event) => {
        this.props.handleRadioChange(event.target.value);
    }

    createRadioButtons = () => {
        const radioNumber = ['1', '2', '3', '4', '5'];
        return radioNumber.map( (number, i) => {
            return (
                <div key={i} className='radio-inputs'>
                    <label htmlFor={number}>{number}</label>
                    <br />
                    <input type='radio'
                        required
                        name='feeling'
                        id={number}
                        value={number}
                        onChange={this.handleChange}></input>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.createRadioButtons()}
            </div>
        )
    }
}

export default RadioButtonForm;
