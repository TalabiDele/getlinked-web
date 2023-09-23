/* eslint-disable react/prop-types */
const Date = ({ date, justify }) => {
	return (
		<div>
			<div className=''>
				<h1
					className={`${
						justify === 'right' && 'text-right'
					} font-bold text-lg text-purple`}
				>
					{date}
				</h1>
			</div>
		</div>
	)
}

export default Date
