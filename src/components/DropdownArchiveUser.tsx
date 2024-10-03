import { FC } from 'react'
import DropdownTemplate from 'components/Dropdown'
import { toggleArchiveUser } from 'store/users/userSlice'
import { useAppDispatch } from 'store/hooks'
import { User } from 'store/users/types'

type DropdownArchiveUser = {
	user: User
}

const DropdownArchiveUser: FC<DropdownArchiveUser> = ({ user }) => {
	const dispatch = useAppDispatch()

	return (
		<DropdownTemplate>
			<span onClick={() => dispatch(toggleArchiveUser(user))}>
				Активировать
			</span>
		</DropdownTemplate>
	)
}

export default DropdownArchiveUser
