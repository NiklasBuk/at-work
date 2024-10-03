import { FC } from 'react'
import arrow from '../assets/arrow-left.svg'
import vector from '../assets/Vector.svg'
import { useNavigate } from 'react-router-dom'
import 'styles/navigation.scss'

const Navigation: FC = () => {
	const navigate = useNavigate()
	const windowWidth = window.innerWidth

	return (
		<span className='navigation' onClick={() => navigate(-1)}>
			<img src={windowWidth > 376 ? arrow : vector} alt='back' />
			<span>Назад</span>
		</span>
	)
}

export default Navigation
