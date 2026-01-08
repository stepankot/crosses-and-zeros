import { setRestartGame } from '../actions'
import { useDispatch } from '../redux-manager'
import InformationLayout from './InformationLayout'

export default function Information() {
	const dispatch = useDispatch()
	const resetGame = () => {
		dispatch(setRestartGame())
	}

	return <InformationLayout resetGame={resetGame} />
}
