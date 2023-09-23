/* eslint-disable react/prop-types */
const Keys = ({ span, text }) => {
	return (
		<div>
			<p className=' text-white text-[0.7rem] mb-[2rem] w-[26rem]'>
				<span className=' text-secondary font-bold text-[0.8rem]'>
					{span}:{' '}
				</span>
				{text}
			</p>
		</div>
	)
}

export default Keys
