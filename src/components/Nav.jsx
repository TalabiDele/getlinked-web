import { Link } from 'react-router-dom'
import logo from '../assets/getlinked.png'
import Buttons from './Buttons'

const Nav = () => {
	return (
		<div className=' border-b border-b-1 border-b-[rgba(255, 255, 255, 0.18)] fixed left-0 right-0'>
			<div className=' flex justify-between w-[80vw] mx-auto items-center pt-[3rem] pb-[1rem]'>
				<div className=''>
					<img src={logo} alt='' />
				</div>
				<ul className=' flex items-center w-[40vw] justify-between font-medium text-white'>
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
						<Link to=''>Contact</Link>
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
