import { useDispatch, useSelector } from 'react-redux'
import {
	setCurrentPlayer,
	setDraw,
	setField,
	setGameOver,
	setWinner
} from '../actions'

import { checkGame } from '../utils/checkGame'
import FieldLayout from './FieldLayout'
import {
	selectCurrentPlayer,
	selectField,
	selectIsGameOver
} from '../selectors'

export default function Field() {
	const currentPlayer = useSelector(selectCurrentPlayer)
	const field = useSelector(selectField)
	const isGameOver = useSelector(selectIsGameOver)

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
