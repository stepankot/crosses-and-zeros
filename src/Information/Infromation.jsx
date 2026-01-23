import { connect } from 'react-redux'
import { setRestartGame } from '../actions'
import InformationLayout from './InformationLayout'
import { Component } from 'react'

export class OldInformation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { resetGame } = this.props
		return <InformationLayout resetGame={resetGame} />
	}
}

const mapDispatchToProps = dispatch => ({
	resetGame: () => dispatch(setRestartGame())
})

const Information = connect(null, mapDispatchToProps)(OldInformation)
export default Information
