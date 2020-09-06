const gamesLoaded = (newGames) => {
	return {
		type: 'GAMES_LOADED',
		payload: newGames
	};
};

const gamesError = (error) => {
	return {
		type: 'GAMES_ERROR',
		payload: error
	};
};

const showQuestion = (currentQuestion, id) => {
	return {
		type: 'SHOW_QUESTION',
		payload: currentQuestion,
		index: id
	};
};

const hideQuestion = () => {
	return {
		type: 'HIDE_QUESTION',
		payload: [],
	};
};

const changeUsersQuantity = (usersQuantity) => {
	return {
		type: 'CHANGE_USERS_QUANTITY',
		payload: usersQuantity
	};
};

const changeQuestionQuantity = (questionQuantity) => {
	return {
		type: 'CHANGE_QUESTION_QUANTITY',
		payload: questionQuantity
	};
};

const addPlayers = (newPlayer) => {
	return {
		type: 'ADD_PLAYERS',
		payload: newPlayer
	};
};

const addPoints = (points) => {
	return {
		type: 'ADD_POINTS',
		payload: points
	};
};

const changeOdd = (countQuestions, currentCountQuestions) => {
	return {
		type: 'CHANGE_ODD',
		payload: countQuestions,
		currentCountQuestions: currentCountQuestions
	};
};

const defaultCard = (id) => {
	return {
		type: 'DEF_CARD',
		payload: id
	};
};

const nextPlayer = () => {
	return {
		type: 'NEXT_PLAYER',
	};
};

const showWinner = () => {
	return {
		type: 'SHOW_WINNER'
	}
}

export {
	gamesLoaded,
	gamesError,
	showQuestion,
	hideQuestion,
	changeUsersQuantity,
	changeQuestionQuantity,
	addPlayers,
	addPoints,
	defaultCard,
	changeOdd,
	nextPlayer,
	showWinner
};

