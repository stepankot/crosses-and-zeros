import { checkGame } from '../utils/checkGame'
import FieldLayout from './FieldLayout'

export default function Field({ ...props }) {
	const {
		field,
		setField,
		setIsDraw,
		setIsGameOver,
		setWinner,
		currentPlayer,
		setCurrentPlayer,
		isGameOver
	} = props

	const onGameCheck = index => {
		if (isGameOver) return
		if (field[index] !== '') return

		const newField = [...field]
		newField[index] = currentPlayer
		setField(newField)

		const result = checkGame(newField, currentPlayer)

		if (result === 'X' || result === 'O') {
			setWinner(result)
			setIsGameOver(true)
			return
		}

		if (result === 'Draw') {
			setIsDraw(true)
			setIsGameOver(true)
			return
		}

		setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'))
	}

	return (
		<FieldLayout
			field={field}
			onClick={onGameCheck}
		></FieldLayout>
	)
}
