import { useState } from 'react'
import Field from './Field/Field'
import Information from './Information/Infromation'

const gameField = ['', '', '', '', '', '', '', '', '']

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameOver, setIsGameOver] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(gameField)
	const [winner, setWinner] = useState(null)

	return (
		<div className="gameLayout">
			<Field />
			<Information />
		</div>
	)
}

export default App
