import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import BeginFeedback from './../Feedback/BeginFeedback.js';
import Feeling from './../Feedback/Feeling.js';
import Understanding from './../Feedback/Understanding.js';
import Support from './../Feedback/Support.js';
import Comments from './../Feedback/Comments.js';
import FeedbackSummary from './../Feedback/FeedbackSummary.js';

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
              <li>
                <Link to='/'>Begin Feedback</Link>
              </li>
              <li>
                <Link to='/feeling'>Feeling</Link>
              </li>
              <li>
                <Link to='/understanding'>Understanding</Link>
              </li>
              <li>
                <Link to='/support'>Support</Link>
              </li>
              <li>
                <Link to='/comments'>Comments</Link>
              </li>
            </nav>

            <Route exact path='/' component={BeginFeedback}></Route>
            <Route exact path='/feeling' component={Feeling}></Route>
            <Route exact path='/understanding' component={Understanding}></Route>
            <Route exact path='/support' component={Support}></Route>
            <Route exact path='/comments' component={Comments}></Route>
          </div>
        </Router>
        <FeedbackSummary />
        <br />
      </div>
    );
  }
}

export default connect()(App);
