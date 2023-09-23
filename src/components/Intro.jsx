import idea from '../assets/idea.png'
import Headers from './Headers'
import Paragraph from './Paragraph'

const Intro = () => {
	return (
		<div className=' bg-bg py-[4rem] bg-idea_bg bg-no-repeat bg-center border-b border-white border-opacity-10'>
			<div className=' w-[80vw] mx-auto flex justify-between items-center'>
				<div className=' w-[40vw]'>
					<img src={idea} alt='' />
				</div>

				<div className=' w-[40vw] mx-auto'>
					<Headers
						text={'Introduction to getlinked'}
						span={'tech Hackathon 1.0'}
					/>

					<Paragraph
						text={
							'Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!'
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default Intro
