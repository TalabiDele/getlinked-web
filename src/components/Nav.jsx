import { Link } from 'react-router-dom'
import logo from '../assets/getlinked.png'
import Buttons from './Buttons'

const Nav = () => {
	return (
		<div className=' bg-bg'>
			<div className=' flex justify-between w-[90vw] mx-auto items-center pt-[3rem] pb-[1rem]'>
				<div className=''>
					<Link to={'/'}>
						<img src={logo} alt='' />
					</Link>
				</div>
				<ul className=' flex items-center w-[40vw] justify-between text-white text-[1rem]'>
					<li className=''>
						<Link to=''>Timeline</Link>
					</li>
					<li className=''>
						<Link to=''>Overview</Link>
					</li>
					<li className=''>
						<Link to=''>FAQs</Link>
					</li>
					<li className=''>
						<Link to='/contact'>Contact</Link>
					</li>
					<li className=''>
						<Buttons text={'Register'} link={'/register'} isFull={false} />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
