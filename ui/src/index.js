import React from 'react';
import ReactDOM from 'react-dom';

import { LocalizeProvider, localizeReducer } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';

import reducers from "./reducers";

import './index.sass';

import App from './app';

const history = createHistory();
const store = createStore(combineReducers({
        ...reducers,
        router: routerReducer,
        localize: localizeReducer
    }),
    composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        promise(),
        logger
    )));

ReactDOM.render(
    <Provider store={store}>
        <LocalizeProvider store={store}>
            <Router history={history}>
                <App dispatch={action => store.dispatch(action)} />
            </Router>
        </LocalizeProvider>
    </Provider>
    , document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
    registerServiceWorker();
}
