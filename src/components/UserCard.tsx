import { FC } from 'react'
import { User } from 'store/users/types'
import avatar from 'assets/avatar.png'
import Menu from 'components/Menu'
import 'styles/userCard.scss'

type UserCard = {
	user: User
}

const UserCard: FC<UserCard> = ({ user }) => {
	return (
		<div className='user-card_container'>
			<div className='user-card_avatar'>
				<img src={avatar} alt='avatar' loading='lazy' />
			</div>
			<div className='user-card_info__wrapper'>
				<div className='user-card_info__top'>
					<div className='user-card_info__top_person'>
						<p>{user.username}</p>
						<Menu user={user} />
					</div>
					<p>{user.company.name}</p>
				</div>
				<p className='user-card_info__bottom_address'>{user.address.city}</p>
			</div>
		</div>
	)
}

export default UserCard
