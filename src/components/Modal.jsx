/* eslint-disable react/prop-types */
import img from '../assets/congratulation.png'
import Buttons from './Buttons'

const Modal = ({ header, paragraph, event }) => {
	return (
		<div>
			<div className=' bg-bg w-[100vw] h-[100vh] flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 z-[10] bg-opacity-70 text-white text-center'>
				<div className=' border border-purple rounded-md p-[3rem]'>
					<img src={img} alt='' className='' />

					<div className='w-[80%] mx-auto'>
						<h1 className=' font-bold text-2xl mb-[1rem]'>{header}</h1>
						<p className=' mb-[1rem] text-[0.7rem]'>{paragraph}</p>
					</div>

					<Buttons text={'Back'} isFull={true} event={event} />
				</div>
			</div>
		</div>
	)
}

export default Modal
