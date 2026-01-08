const gameField = ['', '', '', '', '', '', '', '', '']

export const initialState = {
	currentPlayer: 'X',
	isGameOver: false,
	isDraw: false,
	field: gameField,
	winner: null
}

export const reducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload
			}
		case 'SET_FIELD':
			return {
				...state,
				field: payload
			}
		case 'RESTART_GAME':
			return initialState
		case 'SET_WINNER':
			return {
				...state,
				winner: payload
			}
		case 'SET_GAME_OVER':
			return {
				...state,
				isGameOver: payload
			}
		case 'SET_DRAW':
			return {
				...state,
				isDraw: payload
			}

		default:
			return state
	}
}
