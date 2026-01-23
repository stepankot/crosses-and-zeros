import { Field } from './Field/Field'
import Information from './Information/Infromation'
import { Component } from 'react'

export class OldApp extends Component {
	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<Field />
				<Information />
			</div>
		)
	}
}
