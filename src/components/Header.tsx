import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo-sign.svg'
import fav from 'assets/fav.svg'
import bell from 'assets/bell.svg'
import avatar from 'assets/avatar.png'
import 'styles/header.scss'

const Header: FC = () => {
	return (
		<div className='header'>
			<div className='header_inner-container'>
				<div className='header_logo'>
					<Link to='/users'>
						<img src={logo} alt='logo' />
						<span>
							at-<b>work</b>
						</span>
					</Link>
				</div>
				<div className='header_user'>
					<div className='header_user__notification'>
						<img src={fav} alt='fav' />
						<img src={bell} alt='bell' />
					</div>
					<div className='header_user__profile'>
						<img src={avatar} alt='user-avatar' />
						<span>Ivan1234</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
