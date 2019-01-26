import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import BeginFeedback from './../Feedback/BeginFeedback.js';
import Feeling from './../Feedback/Feeling.js';
import Understanding from './../Feedback/Understanding';

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
      this.props.dispatch({ type: "STORE_FEEDBACK", payload: response.data })
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
        <Router>
          <div>
            <nav>
              <p>Remove Links Later</p>
              <Link to='/'>Begin Feedback</Link>
              <Link to='/feeling'>Feeling</Link>
              <Link to='/understanding'>Understanding</Link>
            </nav>
            <Route exact path='/' component={BeginFeedback}></Route>
            <Route exact path='/feeling' component={Feeling}></Route>
            <Route exact path='/understanding' component={Understanding}></Route>
          </div>
        </Router>
        <br />
      </div>
    );
  }
}

export default connect()(App);
