/* eslint-disable react/prop-types */
const Dropdown = ({
	placeholder,
	isValue,
	type,
	change,
	id,
	name,
	label,
	selected,
	selection,
}) => {
	return (
		<div>
			<div className=''>
				<label
					htmlFor={id}
					className=' font-medium text-[0.7rem] text-white mb-[0.5rem]'
				>
					{label}
				</label>
				<select
					name={name}
					id={id}
					className='border border-white rounded-sm bg-transparent text-sm p-[0.5rem] w-full text-white placeholder:text-sm shadow-lg mb-[0.5rem]'
				>
					<option value={isValue} selected>
						{selected}
					</option>
					{selection?.map((e) => (
						<option value={e.id} key={e.id} className=' text-black'>
							{e.name}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default Dropdown
