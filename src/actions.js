export const ACTION_TYPE = {
	SET_FIELD: 'SET_FIELD',
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
	SET_GAME_OVER: 'SET_GAME_OVER',
	SET_WINNER: 'SET_WINNER',
	RESTART_GAME: 'RESTART_GAME',
	SET_DRAW: 'SET_DRAW'
}

export const setCurrentPlayer = player => ({
	type: ACTION_TYPE.SET_CURRENT_PLAYER,
	payload: player
})

export const setWinner = winner => ({
	type: ACTION_TYPE.SET_WINNER,
	payload: winner
})

export const setGameOver = () => ({
	type: ACTION_TYPE.SET_GAME_OVER,
	payload: true
})

export const setRestartGame = initialState => ({
	type: ACTION_TYPE.RESTART_GAME,
	payload: initialState
})

export const setDraw = () => ({
	type: ACTION_TYPE.SET_DRAW,
	payload: true
})

export const setField = field => ({
	type: ACTION_TYPE.SET_FIELD,
	payload: field
})
