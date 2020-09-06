const updateSetting = (state, action) => {
	if (state === undefined ) {
		return {
			countUsers: [2, 3, 4],
			currentCountUsers: 2,
			countQuestions: [8, 16, 24],
			currentCountQuestions: 16
		}
	}

	switch (action.type) {
		case 'CHANGE_USERS_QUANTITY':
			return {
				...state.setting,
				currentCountUsers: action.payload
			}
		case 'CHANGE_QUESTION_QUANTITY':
			return {
				...state.setting,
				currentCountQuestions: action.payload
			}
		case 'CHANGE_ODD':
			console.log(action.payload)
			return {
				...state.setting,
				countQuestions: action.payload,
				currentCountQuestions: action.currentCountQuestions
			}
		default: 
			return state.setting;
	}
}

export default updateSetting;