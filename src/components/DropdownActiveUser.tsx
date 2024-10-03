import { FC } from 'react'
import DropdownTemplate from 'components/Dropdown'
import { Link } from 'react-router-dom'
import { removeUser, toggleArchiveUser } from 'store/users/userSlice'
import { useAppDispatch } from 'store/hooks'
import { User } from 'store/users/types'

type DropdownActiveUser = {
	user: User
}

const DropdownActiveUser: FC<DropdownActiveUser> = ({ user }) => {
	const dispatch = useAppDispatch()

	return (
		<DropdownTemplate>
			<Link to={`/users/${user.id}`}>
				<span>Редактировать</span>
			</Link>
			<span onClick={() => dispatch(toggleArchiveUser(user))}>
				Архивировать
			</span>
			<span onClick={() => dispatch(removeUser(user.id))}>Скрыть</span>
		</DropdownTemplate>
	)
}

export default DropdownActiveUser
