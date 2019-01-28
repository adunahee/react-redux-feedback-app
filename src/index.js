import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//imports for using redux store and logger dev tool
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// logger and middleware for testing
import {applyMiddleware} from 'redux';
import logger from 'redux-logger';

//reducer to store feedback in state as object with key, properties
const feedbackDefaultState = { feeling: null, understanding: null, support: null, comments: "No comments given." }
const clientFeedback = (state = feedbackDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_FEELING':
            return { ...state, ...action.payload }
        case 'UPDATE_UNDERSTANDING':
            return { ...state, ...action.payload }
        case 'UPDATE_SUPPORT':
            return { ...state, ...action.payload }
        case 'UPDATE_COMMENTS':
            return { ...state, ...action.payload }
        default:
            break;
    }
    //action types for each page of the feedback
    return state;
}

const serverFeedback = (state = [], action) => {
    if (action.type === "STORE_FEEDBACK") {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        clientFeedback,
        serverFeedback
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
