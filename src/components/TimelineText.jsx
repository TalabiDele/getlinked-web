/* eslint-disable react/prop-types */

const TimelineText = ({ header, paragraph, justify }) => {
	return (
		<div>
			<div className={`${justify === 'right' && 'text-right'} w-[30vw]`}>
				<h1 className=' text-purple font-bold mb-[1rem] text-lg'>{header}</h1>
				<p className=' text-white text-[0.7rem]'>{paragraph}</p>
			</div>
		</div>
	)
}

export default TimelineText
