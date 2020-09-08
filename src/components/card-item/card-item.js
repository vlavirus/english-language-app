import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideQuestion, addPoints, defaultCard, nextPlayer} from '../../actions';

import showIcon from './lnr-eye.svg';
import wrongIcon from './wrong.svg';
import acceptIcorn from './okey.svg';

import './card-item.scss';
import { Fragment } from 'react';
class CardItemContainer extends Component {

	showAnswer() {
		document.querySelector('.card__answer').classList.remove('hide');
		document.querySelector('.card__check').classList.add('hide');
		document.querySelector('.card__reject').classList.remove('hide');
		document.querySelector('.card__correct').classList.remove('hide');
	}

	render() {
		const {indexCurrentQuestion ,currentQuestionStatus, hideQuestion, addPoints, defaultCard, nextPlayer} = this.props;
		
		if (currentQuestionStatus) {
			const {currentQuestion} = this.props;
			const question = currentQuestion[0],
			answer = currentQuestion[1];

			return <CardItem 
						question={question}
						answer={answer}
						hideQuestion={hideQuestion}
						showAnswer = {this.showAnswer}
						addPoints={addPoints}
						indexCurrentQuestion={indexCurrentQuestion}
						defaultCard={defaultCard}
						nextPlayer={nextPlayer}/>
		} else if (currentQuestionStatus === false) {
			return <HideCardItem/>
		} else {
			return <React.Fragment></React.Fragment>
		}
	}
}

const CardItem = ({question,
				   answer,
				   hideQuestion,
				   showAnswer,
				   addPoints,
				   indexCurrentQuestion,
				   defaultCard,
				   nextPlayer}) => {
	return (
		<div className="overlay_black animate__animated animate__fadeInDown" >
			<div className="card animate__animated animate__fadeInDown">
				<div className="card__question">
					<div className="card__header">
						<div className="card__value">15</div>
						<div className="card__close"
						onClick={() => hideQuestion()}>&times;</div>
					</div>
					<div className="card__text">{question}</div>
				</div>
				<div className="card__answer animate__animated animate__fadeInUp hide">{answer}</div>
				<div className="card__control">
					<button className="card__check"
						onClick={showAnswer}>
						<img src={showIcon} alt="card__icon"/>
						<span>Check</span>
					</button>
					<button 
						className="card__reject animate__animated animate__fadeInLeft faster hide"
						onClick={() => {
							defaultCard(indexCurrentQuestion)
							hideQuestion()
							nextPlayer()
						}}
						>
						<img src={wrongIcon} alt="card__icon"/>
						Wrong
					</button>
					<button 
						className="card__correct animate__animated animate__fadeInRight hide"
						onClick={() => {
							addPoints(15)
							defaultCard(indexCurrentQuestion)
							hideQuestion()
							nextPlayer()
						}}>
						<img src={acceptIcorn} alt="card__icon"/>
						Correct
					</button>
				</div>
			</div>
		</div>
	);
}

const HideCardItem = () => {
	return (
		<div className="overlay animate__animated animate__fadeOutUp">
			<div className="card animate__animated animate__fadeOutUp">
			</div>
		</div>
	);
}

const mapStateToProps = ({card: {currentQuestion, currentQuestionStatus, indexCurrentQuestion}}) => {
	return {
		currentQuestion, currentQuestionStatus, indexCurrentQuestion
	}
}

const mapDispatchToProps =(dispatch) => {
	return {
		hideQuestion: () => {
			dispatch(hideQuestion())
		},
		addPoints: (points) => {
			dispatch(addPoints(points))
		},
		defaultCard: (id) => {
			dispatch(defaultCard(id))
		},
		nextPlayer: () => {
			dispatch(nextPlayer())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItemContainer);