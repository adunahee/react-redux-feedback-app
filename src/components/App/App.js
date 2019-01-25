import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    axios({
      method: 'GET', 
      url: '/feedback', 
    }).then((response) => {
      console.log(response.data);
      this.props.dispatch({type: "STORE_FEEDBACK", payload: response.data})
    }).catch((error) => {
      console.log('error in getFeedback', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
