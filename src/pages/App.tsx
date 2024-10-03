import { lazy, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout'
import 'styles/app.scss'

const MainPage = lazy(() => import('pages/MainPage'))
const UserDetails = lazy(() => import('pages/UserDetails'))

function App() {
	useEffect(() => {
		document.title = 'AT-WORK | Users'
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/users' element={<MainPage />} />
				<Route path='/users/:userId' element={<UserDetails />} />
				<Route path='/*' element={<Navigate to='/users' />} />
			</Route>
		</Routes>
	)
}

export default App
