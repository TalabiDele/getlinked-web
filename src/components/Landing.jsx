import chain from '../assets/chain.png'
import flare from '../assets/flare.png'
import creative from '../assets/Creative-1.png'
import landingImg from '../assets/landing_img.png'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<div className=' bg-bg pt-[10rem] bg-hero_bg bg-cover bg-no-repeat border-y border-white border-opacity-10 relative'>
			<div className=' flex items-center w-[90vw] mx-auto'>
				<div className=' w-[50rem]'>
					<div className=' relative flex items-end mb-[1rem]'>
						<h1 className=' font-bold text-white text-6xl'>
							getlinked Tech <br /> Hackathon{' '}
							<span className=' text-purple'>1.0</span>
						</h1>
						<img src={chain} alt='' className=' w-[4rem]' />
						<img src={flare} alt='' className=' w-[4rem]' />
						<img
							src={creative}
							alt=''
							className=' absolute -top-[4rem] right-[10rem]'
						/>
					</div>

					<p className=' text-white w-[70%] mb-[1rem]'>
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<div className=' mb-[4rem]'>
						<Link to='/register'>
							<Buttons text={'Register'} />
						</Link>
					</div>

					<div className=' text-white flex unica'>
						<h1 className=' text-5xl tracking-tighter'>
							00 <span className=' text-sm'>H</span>
						</h1>
						<h1 className=' text-5xl'>
							00 <span className=' text-sm'>M</span>
						</h1>
						<h1 className=' text-5xl'>
							00 <span className=' text-sm'>S</span>
						</h1>
					</div>
				</div>

				<div className='w-[60vw] relative left-[3rem] '>
					<img
						src={landingImg}
						alt=''
						className=' object-cover object-center'
					/>
				</div>
			</div>
		</div>
	)
}

export default Landing
