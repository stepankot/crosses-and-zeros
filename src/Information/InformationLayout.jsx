import { useReduxState } from '../redux-manager'

export default function InformationLayout({ resetGame }) {
	const { isGameOver, winner, isDraw, currentPlayer } = useReduxState()

	return (
		<section className="infoSection">
			<div>
				<h2>
					Статус игры: {isGameOver ? 'Закончена' : `ходит ${currentPlayer}`}
				</h2>
				<h2>{isDraw && !winner && 'Ничья'}</h2>
				<h2>{winner && `Победил: ${winner}`}</h2>
				<div className="resetButtonContainer">
					{isGameOver || isDraw ? (
						<button onClick={resetGame}>Начать заново</button>
					) : (
						''
					)}
				</div>
			</div>
		</section>
	)
}
