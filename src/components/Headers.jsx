/* eslint-disable react/prop-types */
const Headers = ({ text, span }) => {
	return (
		<div>
			<h1 className=' text-white font-bold text-2xl mb-[1rem]'>
				{text} <br /> <span className=' text-purple'>{span}</span>
			</h1>
		</div>
	)
}

export default Headers
