import { Component } from 'react'

export class FieldLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { onClick, field } = this.props

		return (
			<div className="w-70 text-5xl grid grid-cols-3 gap-4 border-gray-400 border-solid border-2">
				{field.map((fieldBox, index) => (
					<div
						className="m-4 h-15 text-center  border-gray-400 border-solid border-2 hover:bg-gray-300 cursor-pointer"
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
