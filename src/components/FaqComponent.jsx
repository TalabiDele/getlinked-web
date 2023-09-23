// eslint-disable-next-line react/prop-types
const FaqComponent = ({ header, paragraph }) => {
	return (
		<div className=' w-[30vw] border-b border-primary ease-in-out duration-300 transition-all'>
			<details className='group ease-in-out duration-300 transition-all' open>
				<summary className='flex cursor-pointer list-none items-center justify-between py-4 text-[0.7rem] text-white font-medium text-secondary-900 group-open:text-primary-500'>
					{header}
					<div className=' text-primary'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='block h-5 w-5 group-open:hidden'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='hidden h-5 w-5 group-open:block'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 12h-15'
							/>
						</svg>
					</div>
				</summary>
				<div className='pb-4 text-white text-opacity-50 text-[0.7rem] ease-in-out duration-300 transition-all'>
					{paragraph}
				</div>
			</details>
		</div>
	)
}

export default FaqComponent
