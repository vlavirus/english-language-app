const updateScore = (state, action) => {
	// console.log(state)
	
	if (state === undefined) {
		return {
			players: [],
			activePlayer: 0,
			cardLeft: null
		}
	}

	
	let indexActivePlayer = state.score.activePlayer;
	let indexNextPlayer = indexActivePlayer;

	const players = [];
	const playersScore = state.score.players;
	const qnttPlayers = state.setting.currentCountUsers;

	switch (action.type) {
		case 'ADD_PLAYERS':
			
			for(let i = 0; i < qnttPlayers; i++) {
				players.push(0);
			}
			return {
				...state.score,
				cardLeft: state.setting.currentCountQuestions,
				players: [
					...players
				]
			}
		case 'ADD_POINTS':
			playersScore[indexActivePlayer] += action.payload;
			return {
				...state.score,
				players: [
					...playersScore
				]
			}
		case 'NEXT_PLAYER':
			indexNextPlayer += 1;

			if(indexNextPlayer >= playersScore.length) {
				indexNextPlayer = 0
			}
			return {
				...state.score,
				cardLeft: state.score.cardLeft - 1,
				activePlayer: indexNextPlayer,
			}
		default:
			return state.score;
	}
}

export default updateScore;