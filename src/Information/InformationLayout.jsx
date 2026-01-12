import { useSelector } from 'react-redux'
import {
	selecetWinner,
	selectCurrentPlayer,
	selectIsdraw,
	selectIsGameOver
} from '../selectors'

export default function InformationLayout({ resetGame }) {
	const currentPlayer = useSelector(selectCurrentPlayer)
	const isGameOver = useSelector(selectIsGameOver)
	const winner = useSelector(selecetWinner)
	const isDraw = useSelector(selectIsdraw)

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
