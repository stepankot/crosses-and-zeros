import {
	setCurrentPlayer,
	setDraw,
	setField,
	setGameOver,
	setWinner
} from '../actions'
import { useDispatch, useReduxState } from '../redux-manager'
import { checkGame } from '../utils/checkGame'
import FieldLayout from './FieldLayout'

export default function Field() {
	const { field, currentPlayer, isGameOver } = useReduxState()
	const dispatch = useDispatch()

	const onGameCheck = index => {
		if (isGameOver) return
		if (field[index] !== '') return

		const newField = [...field]
		newField[index] = currentPlayer
		dispatch(setField(newField))

		const result = checkGame(newField, currentPlayer)

		if (result === 'X' || result === 'O') {
			dispatch(setWinner(result))
			dispatch(setGameOver())
			return
		}

		if (result === 'Draw') {
			dispatch(setDraw())
			dispatch(setGameOver())
			return
		}

		dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'))
	}

	return (
		<FieldLayout
			field={field}
			onClick={onGameCheck}
		></FieldLayout>
	)
}
