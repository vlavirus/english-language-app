import React, {Component} from 'react';
import './card-item.scss';
import {connect} from 'react-redux';
import showIcon from './lnr-eye.svg';
import wrongIcon from './wrong.svg';
import acceptIcorn from './okey.svg';
import {hideQuestion, addPoints, defaultCard, nextPlayer} from '../../actions';

class CardItemContainer extends Component {

	showAnswer() {
		document.querySelector('.card-answer').classList.remove('hide');
		document.querySelector('.card-check').classList.add('hide');
		document.querySelector('.card-reject').classList.remove('hide');
		document.querySelector('.card-correct').classList.remove('hide');
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
			return <div></div>
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
		<div className="overlay-black animate__animated animate__fadeInDown"
			//  onClick={() => hideQuestion()}
			 >
			<div className="card animate__animated animate__fadeInDown">
				<div className="card-question">
					<div className="card-question__header">
						<div className="card-question__value">15</div>
						<div className="card-question__close"
						onClick={() => hideQuestion()}>&times;</div>
					</div>
					<div className="card-question__text">{question}</div>
				</div>
				<div className="card-answer animate__animated animate__fadeInUp hide">{answer}</div>
				<div className="card-control">
					<button className="card-check"
						onClick={showAnswer}>
						<img src={showIcon} alt="card-check__icon"/>
						<span>Check</span>
					</button>
					<button 
						className="card-reject animate__animated animate__fadeInLeft faster hide"
						onClick={() => {
							defaultCard(indexCurrentQuestion)
							hideQuestion()
							nextPlayer()
						}}
						>
						<img src={wrongIcon} alt="card-check__icon"/>
						Wrong
					</button>
					<button 
						className="card-correct animate__animated animate__fadeInRight hide"
						onClick={() => {
							addPoints(15)
							defaultCard(indexCurrentQuestion)
							hideQuestion()
							nextPlayer()
						}}>
						<img src={acceptIcorn} alt="card-check__icon"/>
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