import logo from '../assets/getlinked.png'

const Nav = () => {
	return (
		<div>
			<div className=' flex justify-between'>
				<div className=''>
					<img src={logo} alt='' />
				</div>
				<ul className=' flex'>
					<li className=''>Timeline</li>
					<li className=''>Overview</li>
					<li className=''>FAQs</li>
					<li className=''>Contact</li>
					<li className=''></li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
