import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import GamestoreService from './services/gamestore-service';
import {GameStoreServiceProvider} from './components/gamestore-service-context';

import store from './store';


const gamestoreService = new GamestoreService();

ReactDOM.render (
    <Provider store={store}>
        <ErrorBoundry>
            <GameStoreServiceProvider value={gamestoreService}>
                <Router>
                    <App/>
                </Router>
            </GameStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)