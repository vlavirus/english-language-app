import React, {Component} from 'react';
import {connect} from 'react-redux'
import {changeUsersQuantity, changeQuestionQuantity, changeOdd} from '../../actions';

import { Link } from 'react-router-dom';
import './game-setting.scss';

class GameSetting extends Component {
	removeActive = (array, tag) => {
		array.forEach(element => {
			element.classList.remove(tag)
		})
	}

	choseTeam = () => {
		const buttonsTeams = document.querySelectorAll('.game-setting__teams_chose');

		this.removeActive(buttonsTeams, 'mode-opt-active');

		buttonsTeams.forEach(button => {
			button.addEventListener('click', () => {
				this.removeActive(buttonsTeams, 'mode-opt-active');
			});
		});
	}

	

	render() {
		const {countUsers,
			   currentCountUsers,
			   countQuestions,
			   currentCountQuestions,
			   changeUsersQuantity,
			   changeQuestionQuantity,
			   changeOdd} = this.props;

		return (
			<div className="game-setting">
				<div className="game-setting__instruction">
					<h3 className="game-setting__header">
						How to Play
					</h3>
					<div className="game-setting__destr">
						<p>Make some teams</p>
						<p>Take turns choosing questions</p>
						<p>Say the answer then hit the Check button</p>
						<p>Click Okay if the answer is correct or Oops if not</p>
					</div>
				</div>
				<div className="game-setting__teams">
					<h4 className="game-setting__subheader">Team</h4>
					{
						countUsers.map((item, index) => {
							return (
								<TeamButton key={index} numberUser={item} currentUsers={currentCountUsers} changeUsersQuantity={changeUsersQuantity} changeOdd={changeOdd}/>
							)
						})
					}
				</div>
				<div className="game-setting__questions">
					<h4 className="game-setting__subheader">Questions</h4>
					{
						countQuestions.map((item, index) => {
							return (
								<QuestionButton key={index} numberQuestion={item} currentQuestion={currentCountQuestions} changeQuestionQuantity={changeQuestionQuantity}/>
							)
						})
					}
				</div>
				<Link to = "/game" className="game-setting__play">Play</Link>
			</div>
		)
	}
}

const TeamButton = ({numberUser, currentUsers, changeUsersQuantity, changeOdd}) => {
	let tag;
	if (numberUser === currentUsers) {
		tag = "game-setting__teams_chose mode-opt-active";
	} else {
		tag = "game-setting__teams_chose";
	}

	if (numberUser % 2 !== 0) {
		return (
			<button 
				className={tag}
				onClick={() => {
					changeUsersQuantity(numberUser);
					changeOdd([9, 15, 24], 15)
				}}
			>{numberUser}</button>
		)
	} else {
		return (
			<button 
				className={tag}
				onClick={() => {
					changeUsersQuantity(numberUser);
					changeOdd([8, 16, 24], 16)
				}}
			>{numberUser}</button>
		)
	}
}

const QuestionButton = ({numberQuestion, currentQuestion, changeQuestionQuantity}) => {
	let tag;
	if (numberQuestion === currentQuestion) {
		tag = "game-setting__questions_chose mode-opt-active";
	} else {
		tag = "game-setting__questions_chose";
	}
	return (
		<button 
			className={tag}
			onClick={() => changeQuestionQuantity(numberQuestion)}>{numberQuestion}</button>
	)
}

const mapStateToProps = ({setting: {countUsers, currentCountUsers, countQuestions, currentCountQuestions}}) => {
	return {countUsers, currentCountUsers, countQuestions, currentCountQuestions};
}

const madDispatchToProps = (dispatch) => {
	return {
		changeUsersQuantity: (usersQuantity) => {
			dispatch(changeUsersQuantity(usersQuantity))
		},
		changeQuestionQuantity: (questionQuantity) => {
			dispatch(changeQuestionQuantity(questionQuantity))
		},
		changeOdd: (countQuestions, currentCountQuestions) => {
			dispatch(changeOdd(countQuestions, currentCountQuestions))
		}
	}
}

export default connect(mapStateToProps, madDispatchToProps)(GameSetting);