import { FC, useEffect } from 'react'
import cross from 'assets/cross.svg'
import success from 'assets/success.svg'
import 'styles/success.scss'

type Success = {
	message: string
	active: boolean
	setActive: (boolean) => void
}

const Success: FC<Success> = ({ message, active, setActive }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			active && setActive(false)
		}, 4000)
		return () => clearTimeout(timeout)
	}, [active])

	return (
		<div
			className={active ? 'success_backdrop active' : 'success_backdrop'}
			onClick={() => setActive(false)}
		>
			<div className='success_message'>
				<span className='success_close-btn' onClick={() => setActive(false)}>
					<img src={cross} alt='close' />
				</span>
				<img src={success} alt='ok' />
				<span>{message}</span>
			</div>
		</div>
	)
}

export default Success
