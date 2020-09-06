import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, GamePage} from '../pages';


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