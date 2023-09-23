import liberty from '../assets/liberty-logo.png'
import libertyPay from '../assets/liberty-pay.png'
import winWise from '../assets/winwise.png'
import wisper from '../assets/wisper-logo.png'
import paybox from '../assets/paybox.png'
import vizual from '../assets/vizual-plus.png'
import LinePart from './LinePart'

const Partners = () => {
	return (
		<div className=' bg-bg py-[5rem] border-b border-white border-opacity-10'>
			<div className=''>
				<div className='text-center text-white mb-[5rem]'>
					<h1 className=' font-bold text-lg mb-[1rem]'>
						Partners and Sponsors
					</h1>
					<p className=' text-[0.7rem] w-[20vw] mx-auto'>
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</p>
				</div>

				<div className=' border border-1 border-purple rounded-sm w-[80%] mx-auto py-[3rem] px-[5rem]'>
					<div className=' flex justify-between'>
						<div className=' border-purple border-b-4 p-[2rem] mr-[2rem] mb-[2rem] flex items-center'>
							<img src={liberty} alt='' className=' w-[10rem]' />
						</div>
						<LinePart />
						<div className=' border-purple border-b-4 p-[2rem] mr-[2rem] mb-[2rem] flex items-center'>
							<img src={libertyPay} alt='' className=' w-[10rem]' />
						</div>
						<LinePart />
						<div className=' border-purple border-b-4 p-[2rem] mr-[2rem] mb-[2rem] flex items-center'>
							<img src={winWise} alt='' className=' w-[10rem]' />
						</div>
					</div>
					<div className=' flex justify-between'>
						<div className=' p-[2rem] mr-[2rem] flex items-center'>
							<img src={wisper} alt='' className=' w-[10rem]' />
						</div>
						<LinePart />
						<div className='p-[2rem] mr-[2rem] flex items-center'>
							<img src={paybox} alt='' className=' w-[10rem]' />
						</div>
						<LinePart />
						<div className=' p-[2rem] mr-[2rem] flex items-center '>
							<img src={vizual} alt='' className=' w-[10rem]' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
