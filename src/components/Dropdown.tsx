import { FC, ReactNode } from 'react'
import 'styles/dropdown.scss'

type DropdownTemplate = {
	children: ReactNode
}

const DropdownTemplate: FC<DropdownTemplate> = ({ children }) => {
	return <div className='dropdown-container'>{children}</div>
}

export default DropdownTemplate
