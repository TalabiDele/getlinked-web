import Headers from './Headers'
import Paragraph from './Paragraph'
import { BsCheck } from 'react-icons/bs'
import bg from '../assets/privacy-bg.png'
import img from '../assets/privacy-img.png'
import imgBg from '../assets/privacy-img-bg.png'

const Privacy = () => {
	return (
		<div className=' bg-bg py-[5rem] relative'>
			<div className='absolute bottom-0 top-0 z-[1]'>
				<img src={bg} alt='' className=' object-contain w-[40rem]' />
			</div>
			<div className=' w-[80vw] mx-auto flex justify-between items-center relative z-[2]'>
				<div className=' w-[30rem]'>
					<Headers text={'Privacy Policy and'} span={'Terms'} />

					<p className=' text-[0.5rem] text-white text-opacity-70 mb-[1rem]'>
						Last updated on September 12, 2023
					</p>

					<div className=' mb-[3rem]'>
						<Paragraph
							text={
								'Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant'
							}
						/>
					</div>

					<div className=' border border-purple p-[2rem] rounded-sm bg-[#D9D9D9] bg-opacity-5'>
						<Paragraph
							text={
								'At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.'
							}
						/>

						<div className=' my-[1rem]'>
							<h1 className=' text-purple font-bold'>Licensing Policy</h1>
							<p className=' text-white text-[0.7rem]'>
								Here are terms of our Standard License:
							</p>
						</div>

						<div className=' flex items-center mb-[1rem]'>
							<div className='bg-[#2DE100] rounded-full font-bold w-[1.5rem] h-[1.5rem] flex justify-center items-center mr-[1rem]'>
								<BsCheck className=' text-white font-bold text-xl' />
							</div>
							<p className='text-white text-[0.7rem]'>
								The Standard License grants you a non-exclusive right to
								navigate and register for our event
							</p>
						</div>
						<div className=' flex items-center'>
							<div className='bg-[#2DE100] rounded-full font-bold w-[1.5rem] h-[1.5rem] flex justify-center items-center mr-[1rem]'>
								<BsCheck className=' text-white font-bold text-xl' />
							</div>
							<p className='text-white text-[0.7rem]'>
								You are licensed to use the item available at any free source
								sites, for your project developement
							</p>
						</div>
					</div>
				</div>

				<div className=' relative w-[30vw]'>
					<div className=''>
						<img src={imgBg} alt='' className='absolute z-[1] -top-[5rem]' />
					</div>
					<div className=' relative z-[2]'>
						<img src={img} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Privacy
