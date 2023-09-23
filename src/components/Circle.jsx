import Line from './Line'

/* eslint-disable react/prop-types */
const Circle = ({ num }) => {
	return (
		<div className=' flex flex-col relative'>
			<Line />
			<div className=' w-[3rem] h-[3rem] bg-gradient-to-r from-secondary to-primary text-white rounded-full font-bold grid justify-items-center items-center text-lg'>
				{num}
			</div>
		</div>
	)
}

export default Circle
