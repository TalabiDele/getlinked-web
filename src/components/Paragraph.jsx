/* eslint-disable react/prop-types */
const Paragraph = ({ text }) => {
	return (
		<div>
			<div className=' w-[70%]'>
				<p className=' text-white text-[0.7rem] leading-6'>{text}</p>
			</div>
		</div>
	)
}

export default Paragraph
