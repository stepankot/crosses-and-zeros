import { useState, useRef } from 'react'
import { store } from './store'

const reduxManager = {
	store: store,
	renderTriggers: new Map(),
	render: () => {
		reduxManager.renderTriggers.forEach(trigger => trigger(Symbol()))
	}
}

export const useReduxState = () => {
	const [renderIndicator, setRenderIndicator] = useState(Symbol())

	const renderTriggerKey = useRef(renderIndicator).current

	reduxManager.renderTriggers.set(renderTriggerKey, setRenderIndicator)
	return reduxManager.store.getState()
}

export const useDispatch = () => action => {
	reduxManager.store.dispatch(action)
	reduxManager.render()
}

export const ReduxRenderer = ({ children, store }) => {
	reduxManager.store = store
	return children
}
