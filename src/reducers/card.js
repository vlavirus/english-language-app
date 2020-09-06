const updateCard = (state, action) => {
	if (state === undefined) {
		return {
			games: [],
			loading: true,
			error: null,
			// winnerWindow: false,
			currentQuestion: [],
			indexCurrentQuestion: '',
			currentQuestionStatus: '',
		}
	}
	switch (action.type) {
		case 'GAMES_LOADED':
			return {
				// ...state.card,
				loading: false,
				error: null,
				games: action.payload,
				currentQuestion: [],
				currentQuestionStatus: '',
			};
		case 'GAMES_ERROR':
			return {
				...state.card,
				games: [],
				loading: false,
				error: action.payload
			}
		case 'SHOW_QUESTION':
			return {
				...state.card,
				currentQuestion: action.payload,
				currentQuestionStatus: true,
				indexCurrentQuestion: action.index
			}
		case 'HIDE_QUESTION':
			return {
				...state.card,
				currentQuestion: action.payload,
				currentQuestionStatus: false
			}
		case 'DEF_CARD':
			let currentCards = state.card.games;
			
			currentCards[action.payload][2] = false;

			return {
				games: [
					...currentCards
				]
			}
		case 'SHOW_WINNER':
			return {
				...state.card,
				games: [],
				showWinner: true
			}
		default:
			return state.card;
	}
}

export default updateCard;