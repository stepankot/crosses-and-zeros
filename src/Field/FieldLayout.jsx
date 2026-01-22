import { Component } from 'react'

export class FieldLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { onClick, field } = this.props

		return (
			<div className="gameField">
				{field.map((fieldBox, index) => (
					<div
						className="fiedlValueBox"
						key={index}
						onClick={() => onClick(index)}
					>
						{fieldBox}
					</div>
				))}
			</div>
		)
	}
}
