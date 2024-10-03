import { FC, Suspense, useEffect } from 'react'
import Loader from 'components/Loader'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from 'components/Header'
import 'styles/layout.scss'

const Layout: FC = () => {
	const navigate = useNavigate()
	useEffect(() => navigate('/users'), [])

	return (
		<div className='main_container'>
			<Header />
			<div className='main_inner-container'>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}

export default Layout
