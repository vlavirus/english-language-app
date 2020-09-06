import React from 'react';

import './error-indicator.scss';
import spinCat from './error.gif';

const ErrorIdicator = () => {
	return (
		<div className="error-indicator">
			<img src={spinCat} alt="spinCatimg"/>
			<span className="error-indicator__confuse">Ammmm....!!!!???</span>
			<div>
				Something has gone terribly wrong.
			</div>
			<div>
				We are now working on a solution to this problem.
			</div>
		</div>
	)
}

export default ErrorIdicator;