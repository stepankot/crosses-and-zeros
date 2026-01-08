import { ACTION_TYPE } from './actions'

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
		case ACTION_TYPE.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload
			}
		case ACTION_TYPE.SET_FIELD:
			return {
				...state,
				field: payload
			}
		case ACTION_TYPE.RESTART_GAME:
			return initialState
		case ACTION_TYPE.SET_WINNER:
			return {
				...state,
				winner: payload
			}
		case ACTION_TYPE.SET_GAME_OVER:
			return {
				...state,
				isGameOver: payload
			}
		case ACTION_TYPE.SET_DRAW:
			return {
				...state,
				isDraw: payload
			}

		default:
			return state
	}
}
