import Headers from './Headers'
import Paragraph from './Paragraph'
import img from '../assets/rules.png'
import bg from '../assets/rule-bg.png'

const Rules = () => {
	return (
		<div className=' bg-bg relative z-[1] border-b border-white border-opacity-10'>
			<img
				src={bg}
				alt=''
				className=' absolute z-[2] object-top -top-[20rem]'
			/>
			<div className=' flex justify-between w-[80vw] mx-auto items-center relative z-[3]'>
				<div className=' w-[50vw]'>
					<Headers text={'Rules and'} span={'Guidelines'} />
					<Paragraph
						text={
							'Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!'
						}
					/>
				</div>

				<div className=''>
					<img src={img} alt='' className=' w-[40vw]' />
				</div>
			</div>
		</div>
	)
}

export default Rules
