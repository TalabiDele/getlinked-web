/* eslint-disable react/prop-types */
const Input = ({ placeholder, isValue, type, change, id, name, label }) => {
	return (
		<div>
			<label
				htmlFor={id}
				className=' font-medium text-[0.7rem] text-white mb-[0.5rem]'
			>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={isValue}
				onChange={change}
				className=' border border-white rounded-sm bg-transparent text-sm p-[0.5rem] w-full text-white placeholder:text-sm shadow-lg mb-[0.5rem]'
			/>
		</div>
	)
}

export default Input
