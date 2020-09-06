import updateCard from './card';
import updateSetting from './setting';
import updateScore from './score';

const initialState = {
	score: {
		players: [],
		activePlayer: 0,
		cardLeft: null
	},
	card: {
		error: null,
		loading: true,
		// winnerWindow: false,
		games: [],
		currentQuestion: [],
		indexCurrentQuestion: '',
		currentQuestionStatus: ''
	},
	setting: {
		countUsers: [2, 3, 4],
		currentCountUsers: 2,
		countQuestions: [8, 16, 24],
		currentCountQuestions: 16
	}
};

const reducer = (state, action) => {
	return {
		card: updateCard(state, action),
		setting: updateSetting(state, action),
		score: updateScore(state, action)
	};
};

export default reducer