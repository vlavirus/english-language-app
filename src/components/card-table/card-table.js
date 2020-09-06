import React, {Component} from 'react';
import {connect} from 'react-redux';
import withGamestoreService from '../hoc';
import Box from '../box';
import DefaultBox from '../default-box';
import {gamesLoaded, showQuestion, gamesError, showWinner} from '../../actions'
import {compose} from '../../utils'
import Spiner from '../spiner'
import ErrorBoundry  from '../error-boundry/';

import './card-table.scss';


class CardTableContainer extends Component {
	
	componentDidMount() {
		const {
			gamestoreService,
			gamesLoaded,
			gamesError,
			currentCountQuestions
			 } = this.props;

		gamestoreService.getGames()
			.then((data) => {
				const boxes = data.sort(() => Math.random() - 0.5).slice(0, currentCountQuestions);
				gamesLoaded(boxes)
			})
			.catch((err) => gamesError(err));
	}

	componentWillUnmount() {
		window.location.reload();
	}

	render() {
		const {loading, error, games, showQuestion, currentCountQuestions} = this.props
		
		if (loading) {
			return <Spiner/>
		}

		if (error) {
			return <ErrorBoundry/>
		}

		return <CardTable games={games} showQuestion={showQuestion} currentCountQuestions={currentCountQuestions} />
	}

}

const CardTable = ({games, showQuestion, currentCountQuestions, }) => {

	let classBox = 'card-table';

	switch(currentCountQuestions) {
		case 8:
			classBox += ' eight';
			break;
		case 9:
			classBox += ' nine';
			break;
		case 15:
			classBox += ' fifteen';
			break;
		case 16:
			classBox += ' sixteen';
			break;
		case 24:
			classBox += ' twenty_four';
			break;
		default:
			classBox += ' sixteen';
	}

	return (
		<div className={classBox}>
			{
				games.map((item, index) => {
					if(item[2] === false) {
						return (
							<DefaultBox 
								key={index}
								id={index}
								number={index + 1}
								currentQuestion={item}
								showQuestion={showQuestion}
							/>
						)
					} else {
						return (
							<Box 
								key={index}
								id={index}
								number={index + 1}
								currentQuestion={item}
								showQuestion={showQuestion}
							/>
						)
					}
				})
			}
		</div>
	)
	}

const mapStateToProps = ({card: {games, loading, error}, setting:{currentCountQuestions}}) => {
	return {games, loading, error, currentCountQuestions};
}

const mapDispatchToProps =(dispatch) => {
	return {
		gamesLoaded: (newGanmes) => {
			dispatch(gamesLoaded(newGanmes))
		},
		showQuestion: (currentQuestion, currentQuestionStatus) => {
			dispatch(showQuestion(currentQuestion, currentQuestionStatus))
		},
		gamesError: (error) => {
			dispatch(gamesError(error))
		},
		showWinner: () => {
			dispatch(showWinner())
		}
	}
}

export default compose(
	withGamestoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(CardTableContainer);