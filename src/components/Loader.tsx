import { FC } from 'react'
import 'styles/loader.scss'

const Loader: FC = () => {
	return (
		<div className='loader_container'>
			<div className='lds-ellipsis'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
