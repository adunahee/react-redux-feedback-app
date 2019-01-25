import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//imports for using redux store and logger dev tool
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//reducer to store feedback in state as object with key, properties
const feedbackDefaultState = {feeling: 3, understanding: 4, support: 5, comments: "Pulling through!"}
const feedback = (state = feedbackDefaultState, action) => {
    //action types for each page of the feedback
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
