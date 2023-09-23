/* eslint-disable react/prop-types */
const Input = ({ placeholder, isValue, type, change, id, name }) => {
	return (
		<div>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={isValue}
				onChange={change}
				className=' border border-white rounded-sm bg-transparent text-sm p-[0.5rem] w-full mb-[2rem] text-white placeholder:text-sm shadow-lg'
			/>
		</div>
	)
}

export default Input
