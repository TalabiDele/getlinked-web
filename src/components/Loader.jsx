import './Style.css'

const Loader = () => {
	return (
		<div>
			<div className=' w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-bg bg-opacity-90 flex justify-center items-center z-[10]'>
				<div className=''>
					<div className='loader'></div>
				</div>
			</div>
		</div>
	)
}

export default Loader
