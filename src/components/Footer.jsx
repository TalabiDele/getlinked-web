import logo from '../assets/getlinked.png'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import { BiSolidPhoneCall } from 'react-icons/bi'
import {
	FaMapMarkerAlt,
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
} from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
	return (
		<div className=' bg-[#100B20] text-[0.7rem] py-[3rem]'>
			<div className=' relative z-[2] grid grid-cols-3 w-[90vw]  mx-auto'>
				<div className=' mb-[2rem]'>
					<img src={logo} alt='' className=' mb-[1rem]' />
					<Paragraph
						text={
							'Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology'
						}
					/>
				</div>

				<div className=' text-white'>
					<h1 className='text-purple font-semibold text-lg mb-[1rem]'>
						Useful Links
					</h1>
					<ul>
						<li className=' mb-[1rem]'>
							<Link to={''}>Overview</Link>
						</li>
						<li className=' mb-[1rem]'>
							<Link to={''}>Timeline</Link>
						</li>
						<li className=' mb-[1rem]'>
							<Link to={''}>FAQs</Link>
						</li>
						<li className=' mb-[1rem]'>
							<Link to={''}>Register</Link>
						</li>
					</ul>
				</div>

				<div className=' text-white w-[50%]'>
					<h1 className='text-purple font-semibold text-lg mb-[2rem]'>
						Contact Us
					</h1>
					<div className=' flex mb-[1rem]'>
						<BiSolidPhoneCall className=' mr-[1rem]' />
						<p className=''>+234 679 81819</p>
					</div>
					<div className=' flex'>
						<FaMapMarkerAlt className=' mr-[1rem]' />
						<p className=''>27,Alara Street Yaba 100012 Lagos State</p>
					</div>
				</div>

				<div className=' text-white flex items-center'>
					<Link
						to={''}
						className=' border-r-2 border-purple pr-[2rem] mr-[2rem]'
					>
						<p className=''>Terms of Use</p>
					</Link>
					<Link to={''}>
						<p className=''>Privacy Policy</p>
					</Link>
				</div>

				<div className=''>
					<div className=' text-white text-xl flex items-center w-[50%] justify-between'>
						<h1 className=' text-purple font-semibold text-[0.7rem]'>
							Follow us
						</h1>
						<FaInstagram />
						<RiTwitterXFill />
						<FaFacebookF />
						<FaLinkedinIn />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
