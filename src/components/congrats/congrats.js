import React from 'react';
import {connect} from 'react-redux';
import shaqImg from './shaq.gif';
import { Link } from 'react-router-dom';

import './congrats.scss';

const Congrats = ({cardLeft, players}) => {

	function checkEqual(a) {
		let count = {};
	  
		for (let x of a) {
		  count[x] = ~~count[x] + 1;
		}
	  
		return a.length - Object.keys(count).filter(x => count[x]>1).length;
	}
	
	if (cardLeft === 0) {
		let winner = 'Winner Team ',
			scoreWinner = players[players.indexOf( Math.max.apply(null, players))]

		if (players.filter((item) => item === scoreWinner).length === 1) {
			winner += `${players.indexOf( Math.max.apply(null, players)) + 1}!`
		} else {
			winner = 'Draw!!'
		}

		return (
			<div className="overlay animate__animated animate__fadeInDown">
				<div className="congrats animate__animated animate__fadeInDown">
					<div className="congrats__header">
						<div className="congrats__value">GAME OVER</div>
					</div>
					<div className="congrats__image">
						<img src={shaqImg} alt="congrats-img" className="congrats__image_animated"/>
					</div>
				</div>
				<div className="congrats__descr">{winner}</div>
				<div className="congrats__control">
					<Link to = "/" className="congrats__restart">Home Page</Link>
				</div>
			</div>
		)
	} else {
		return (
			<React.Fragment></React.Fragment>
		)
	}
}

const mapStateToProps = ({card:{games},score: {players, cardLeft}}) => {
	return {
		games, players, cardLeft
	}
}

export default connect(mapStateToProps)(Congrats);