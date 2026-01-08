import { useDispatch } from '../redux-manager'
import InformationLayout from './InformationLayout'

export default function Information() {
	const dispatch = useDispatch()
	const resetGame = () => {
		dispatch({ type: 'RESTART_GAME' })
	}

	return <InformationLayout resetGame={resetGame} />
}
