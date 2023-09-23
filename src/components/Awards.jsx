import img from '../assets/awards-img.png'
import bg from '../assets/awards-bg.png'
import Headers from './Headers'
import Paragraph from './Paragraph'
import silver from '../assets/silver_medal.png'
import gold from '../assets/gold_medal.png'

const Awards = () => {
	return (
		<div className=' bg-bg_dark bg-no-repeat relative py-[5rem]'>
			<img
				src={bg}
				alt=''
				className=' absolute z-[2] object-top -top-[10rem]'
			/>
			<div className=' relative z-[3] flex justify-between w-[80vw] mx-auto items-center'>
				<div className=''>
					<img src={img} alt='' className='' />
				</div>

				<div className=''>
					<div className=' mb-[15rem] ml-[10rem]'>
						<Headers text={'Prizes and'} span={'Rewards'} />
						<Paragraph
							text={
								'Highlight of the prizes or rewards for winners and for participants.'
							}
						/>
					</div>

					<div className=' flex items-center'>
						<div className=' text-white font-bold border-1 border border-purple bg-purple_light rounded-md w-[10rem] text-center pt-[5rem] pb-[2rem] relative mr-[2rem]'>
							<img
								src={silver}
								alt=''
								className=' absolute -top-[5rem] left-4 w-[8rem]'
							/>
							<h1 className=' text-2xl'>2nd</h1>
							<p className=' tex-[0.7rem]'>Runner</p>
							<h1 className=' text-purple text-2xl'>N300,000</h1>
						</div>

						<div className=' text-white font-bold border-1 border border-primary bg-primary_light rounded-md w-[13rem] text-center pt-[5rem] pb-[2rem] mr-[2rem]'>
							<img
								src={gold}
								alt=''
								className=' absolute top-[11rem] right-[11rem] w-[15rem]'
							/>
							<h1 className=' text-2xl'>1st</h1>
							<p className=' tex-[0.7rem] mb-[2rem]'>Runner</p>
							<h1 className=' text-primary text-2xl'>N300,000</h1>
						</div>

						<div className=' text-white font-bold border-1 border border-purple bg-purple_light rounded-md w-[10rem] text-center pt-[5rem] pb-[2rem] relative'>
							<img
								src={silver}
								alt=''
								className=' absolute -top-[5rem] left-4 w-[8rem]'
							/>
							<h1 className=' text-2xl'>2nd</h1>
							<p className=' tex-[0.7rem]'>Runner</p>
							<h1 className=' text-purple text-2xl'>N300,000</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Awards
