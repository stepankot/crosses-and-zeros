import { connect } from 'react-redux'
import { Component } from 'react'

export class oldInfoLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { resetGame, isGameOver, isDraw, currentPlayer, winner } = this.props

		return (
			<section>
				<div className="m-4 text-2xl">
					<h2>
						Статус игры: {isGameOver ? 'Закончена' : `ходит ${currentPlayer}`}
					</h2>
					<h2>{isDraw && !winner && 'Ничья'}</h2>
					<h2>{winner && `Победил: ${winner}`}</h2>
					<div className="flex items-center justify-center">
						{isGameOver || isDraw ? (
							<button
								className="p-5 text-xl rounded-3xl m-3 bg-sky-200 hover:cursor-pointer"
								onClick={resetGame}
							>
								Начать заново
							</button>
						) : (
							''
						)}
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer,
	isGameOver: state.isGameOver,
	winner: state.winner,
	isDraw: state.isDraw
})

const InformationLayout = connect(mapStateToProps)(oldInfoLayout)
export default InformationLayout
