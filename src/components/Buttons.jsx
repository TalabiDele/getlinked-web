import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Buttons = ({ text, isFull, link }) => {
	return (
		<div>
			<Link to={link}>
				<button
					className={`${
						isFull && 'w-full'
					} py-[0.5rem] px-[2rem] rounded-md bg-gradient-to-r from-secondary to-primary text-white`}
				>
					{text}
				</button>
			</Link>
		</div>
	)
}

export default Buttons
