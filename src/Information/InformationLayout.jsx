import { connect } from 'react-redux'
import { Component } from 'react'

export class oldInfoLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { resetGame, isGameOver, isDraw, currentPlayer, winner } = this.props

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
}

const mapStateToProps = state => ({
	currentPlayer: state.currentPlayer,
	isGameOver: state.isGameOver,
	winner: state.winner,
	isDraw: state.isDraw
})

const InformationLayout = connect(mapStateToProps)(oldInfoLayout)
export default InformationLayout
