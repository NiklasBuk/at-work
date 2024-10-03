import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Endpoints } from 'api/Endpoints'
import { API_URL } from 'api/apiClient'
import { setUsers } from 'store/users/userSlice'
import Loader from 'components/Loader'
import UserCard from 'components/UserCard'
import Category from 'components/Category'
import 'styles/mainPage.scss'

const MainPage: FC = () => {
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState(false)
	const activeUsers = useAppSelector(state => state.users?.users?.active)
	const archiveUsers = useAppSelector(state => state.users?.users?.archive)

	useEffect(() => {
		document.title = 'AT-WORK | Users'
	}, [])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		const getUsersList = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					`${API_URL}${Endpoints.USERS.GET_USERS_LIST}?_page=0&_limit=6`,
					{ signal }
				)

				if (!response.ok)
					throw new Error('Не удалось получить список пользователей')

				const data = await response.json()
				dispatch(setUsers(data))
				setLoading(false)
			} catch (err) {
				if (!signal.aborted) console.log(err)
			}
		}

		!(activeUsers.length || archiveUsers.length) && getUsersList()

		return () => {
			controller.abort()
			// dispatch(clearUsers())
		}
	}, [])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='main-page_category'>
						<h1>Активные</h1>
						<div className='main-page_wrapper'>
							{activeUsers.length ? (
								activeUsers.map(user => <UserCard key={user.id} user={user} />)
							) : (
								<span>Нет активных пользователей</span>
							)}
						</div>
					</div>
					<div className='main-page_category'>
						<h1>Архив</h1>
						<div className='main-page_wrapper archive-list'>
							{archiveUsers.length ? (
								archiveUsers.map(user => <UserCard key={user.id} user={user} />)
							) : (
								<span>Нет пользователей в архиве</span>
							)}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default MainPage
