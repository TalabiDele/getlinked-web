import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Buttons = ({ text, isFull, link, event }) => {
	return (
		<div>
			<Link to={link}>
				<button
					onClick={event}
					className={`${
						isFull && 'w-full'
					} py-[0.5rem] px-[1rem] rounded-sm bg-gradient-to-r from-secondary to-primary text-white text-sm font-medium`}
				>
					{text}
				</button>
			</Link>
		</div>
	)
}

export default Buttons
