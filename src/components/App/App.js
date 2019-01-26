import React, { Component } from 'react';
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
import SuccessfulSubmit from './../Feedback/SuccessfulSubmit.js';
import AdminTable from './../Admin/AdminTable.js';

class App extends Component {

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
                <Link to='/ongoing/feeling'>Feeling</Link>
              </li>
              <li>
                <Link to='/ongoing/understanding'>Understanding</Link>
              </li>
              <li>
                <Link to='/ongoing/support'>Support</Link>
              </li>
              <li>
                <Link to='/ongoing/comments'>Comments</Link>
              </li>
              <li>
                <Link to='/submitted'>Successful Submit</Link>
              </li>
              <li>
                <Link to='/admin'>Admin</Link>
              </li>
            </nav>

            <Route exact path='/' component={BeginFeedback}></Route>
            <Route exact path='/ongoing/feeling' component={Feeling}></Route>
            <Route exact path='/ongoing/understanding' component={Understanding}></Route>
            <Route exact path='/ongoing/support' component={Support}></Route>
            <Route exact path='/ongoing/comments' component={Comments}></Route>
            <Route path = '/ongoing' component={FeedbackSummary}></Route>
            <Route exact path = '/submitted' component={SuccessfulSubmit}></Route>
            <Route exact path = '/admin' component={AdminTable}></Route>
          </div>
        </Router>
        <br />
      </div>
    );
  }
}

export default connect()(App);
