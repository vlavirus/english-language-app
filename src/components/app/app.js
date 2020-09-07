import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {HomePage, GamePage } from '../pages';

import './app.css';

const App = () => {
	return (
		<Switch>
			<Route 
				path="/"
				component={HomePage}
				exact
			/>
			<Route 
				path="/game"
				component={GamePage}
			/>
		</Switch>
	)
}

export default App;