import { connect } from 'react-redux'
import {
	setCurrentPlayer,
	setDraw,
	setField,
	setGameOver,
	setWinner
} from '../actions'

import { checkGame } from '../utils/checkGame'
import { FieldLayout } from './FieldLayout'
import { Component } from 'react'

export class OldField extends Component {
	constructor(props) {
		super(props)
	}

	onGameCheck = index => {
		const { isGameOver, field, currentPlayer, dispatch } = this.props
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

	render() {
		const { field } = this.props

		return (
			<FieldLayout
				field={field}
				onClick={this.onGameCheck}
			></FieldLayout>
		)
	}
}

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer,
	field: state.field,
	isGameOver: state.isGameOver
})

export const Field = connect(mapStateToProps)(OldField)
