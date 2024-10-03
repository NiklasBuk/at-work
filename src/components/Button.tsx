import { FC } from 'react'
import 'styles/button.scss'

type Button = {
	title: string
}

const Button: FC<Button> = ({ title }) => {
	return <button className='custom-button'>{title}</button>
}

export default Button
