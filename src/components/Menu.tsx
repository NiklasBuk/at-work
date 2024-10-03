import { FC, useState } from 'react'
import DropdownActiveUser from 'components/DropdownActiveUser'
import DropdownArchiveUser from 'components/DropdownArchiveUser'
import { useAppSelector } from 'store/hooks'
import 'styles/menu.scss'

const Menu: FC = ({ user }) => {
	const [showMenu, setShowMenu] = useState(false)
	const isActive = useAppSelector(state => state.users.users.active).find(
		u => u.id === user.id
	)

	return (
		<>
			<div
				className='menu_container'
				onClick={event => {
					event.stopPropagation()
					setShowMenu(prev => !prev)
				}}
			>
				<span className='menu_dots'></span>
				{isActive && showMenu && <DropdownActiveUser user={user} />}
				{!isActive && showMenu && <DropdownArchiveUser user={user} />}
			</div>
		</>
	)
}

export default Menu
