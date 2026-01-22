import { Field } from './Field/Field'
import Information from './Information/Infromation'
import { Component } from 'react'

export class OldApp extends Component {
	render() {
		return (
			<div className="gameLayout">
				<Field />
				<Information />
			</div>
		)
	}
}
