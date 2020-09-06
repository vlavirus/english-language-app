import React from 'react';

import './box.scss';

const Box = ({id, number, currentQuestion, showQuestion}) => {

	if ( number % 2) {
		return (
			<div className="box hvr-grow-rotate blue-light"
				onClick={() => showQuestion(currentQuestion, id)}>
					<div className="box__number">
						{number}
					</div>
				</div>
		)
	} else {
		return (
			<div className="box hvr-grow-rotate-2 blue-dark"
				onClick={() => showQuestion(currentQuestion, id)}>
				<div className="box__number">
					{number}
				</div>
			</div>
		)
	}
}

export default Box;