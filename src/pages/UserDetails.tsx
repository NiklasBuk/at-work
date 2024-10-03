import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import Category from 'components/Category'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { changeUserProfile } from 'store/users/userSlice'
import avatar from 'assets/avatar-big.png'
import Success from 'components/Success'
import Navigation from 'components/Navigation'
import 'styles/userDetails.scss'

const UserDetails: FC = () => {
	const dispatch = useAppDispatch()

	const { userId } = useParams()
	const [success, setSuccess] = useState(false)

	const currentUser = useAppSelector(
		state => state.users?.users?.active
	).filter(user => user.id === +userId)[0]

	useEffect(() => {
		document.title = `AT-WORK | User ${currentUser?.username}`
	}, [])

	const userProfileDataHandler = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const editedUser = {
			id: currentUser.id,
			name: formData.get('name') ?? currentUser.name,
			username: formData.get('username') ?? currentUser.username,
			email: formData.get('email') ?? currentUser.email,
			address: {
				city: formData.get('city') ?? currentUser.address.city
			},
			phone: formData.get('phone') ?? currentUser.phone,
			company: {
				name: formData.get('workname') ?? currentUser.company.name
			}
		}
		dispatch(changeUserProfile(editedUser))
		setSuccess(true)
	}

	return (
		<div className='user-details'>
			{success && (
				<Success
					message='Изменения сохранены!'
					active={success}
					setActive={setSuccess}
				/>
			)}
			<Navigation />
			<div className='user-details_container'>
				<div className='user-details_field base-data'>
					<div className='user-details_avatar-container'>
						<img src={avatar} alt='avatar' />
					</div>
					<div className='user-details_categoties'>
						<h1>Данные профиля</h1>
						<div className='user-details_categories user-category'>
							<Category title='Рабочее пространство' />
							<Category title='Приватность' />
							<Category title='Безопасность' />
						</div>
					</div>
				</div>
				<div className='user-details_field profile-data'>
					<h1>Данные профиля</h1>
					<form onSubmit={userProfileDataHandler}>
						<TextField
							title='Имя'
							name='name'
							prop={currentUser?.name}
						></TextField>
						<TextField
							title='Никнейм'
							name='username'
							prop={currentUser?.username}
						></TextField>
						<TextField
							title='Почта'
							name='email'
							prop={currentUser?.email}
						></TextField>
						<TextField
							title='Город'
							name='city'
							prop={currentUser?.address?.city}
						></TextField>
						<TextField
							title='Телефон'
							name='phone'
							prop={currentUser?.phone}
						></TextField>
						<TextField
							title='Название компании'
							name='workname'
							prop={currentUser?.company?.name}
						></TextField>
						<Button title='Сохранить' type='submit' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default UserDetails
