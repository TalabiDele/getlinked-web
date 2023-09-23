import bg from '../assets/criteria-bg.png'
import Headers from './Headers'
import img from '../assets/criteria-img.png'
import Keys from './Keys'
import Buttons from './Buttons'

const Criteria = () => {
	return (
		<div>
			<div className=' bg-bg relative border-b border-white border-opacity-10 py-[5rem]'>
				<img
					src={bg}
					alt=''
					className=' absolute z-[1] object-top -top-[10rem]'
				/>
				<div className=' flex justify-between w-[80vw] mx-auto items-center z-[3] relative'>
					<div className=''>
						<img src={img} alt='' className=' w-[35vw]' />
					</div>

					<div className=''>
						<Headers text={'Rules and'} span={'Guidelines'} />
						<div className=' mb-[2rem]'>
							<Keys
								text={
									'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
								}
								span={'Innovation and Creativity'}
							/>
							<Keys
								text={
									'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
								}
								span={'Functionality'}
							/>
							<Keys
								text={
									'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
								}
								span={'Impact and Relevance'}
							/>
							<Keys
								text={
									'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
								}
								span={'Technical Complexity'}
							/>
							<Keys
								text={
									'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
								}
								span={'Technical Complexity'}
							/>
						</div>
						<Buttons text={'Read More'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Criteria
