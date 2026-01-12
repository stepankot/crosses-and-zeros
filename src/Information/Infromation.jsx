import { useDispatch } from 'react-redux'
import { setRestartGame } from '../actions'
import InformationLayout from './InformationLayout'

export default function Information() {
	const dispatch = useDispatch()
	const resetGame = () => {
		dispatch(setRestartGame())
	}

	return <InformationLayout resetGame={resetGame} />
}
