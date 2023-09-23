import img from '../assets/register.png'
import Buttons from './Buttons'
import Input from './Input'
import { useState, useContext, useEffect } from 'react'
import Context from './Context/Context'
import Dropdown from './Dropdown'

const Create = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [category, setCategory] = useState()
	const [topic, setTopic] = useState('')
	const [size, setSize] = useState()
	const [privacy, setPrivacy] = useState(false)
	const [responseData, setResponseData] = useState()
	const [categories, setCategories] = useState()

	const { loading, setLoading, isError, setIsError, isSent, setIsSent } =
		useContext(Context)

	const group = [
		{ id: 1, name: 1 },
		{ id: 1, name: 2 },
		{ id: 3, name: 3 },
		{ id: 4, name: 4 },
		{ id: 5, name: 5 },
	]

	useEffect(() => {
		const handleCategory = async () => {
			const res = await fetch(
				`${process.env.REACT_BASE_URL}/hackathon/categories-list`
			)

			const data = await res.json()

			console.log(data)

			setCategories(data)
		}

		handleCategory()
	}, [])

	const handleRegister = async () => {
		setLoading(true)

		const res = await fetch(
			`${process.env.REACT_BASE_URL}/hackathon/registration`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:5173',

					'Access-Control-Allow-Methods':
						'POST, PUT, PATCH, GET, DELETE, OPTIONS,',

					'Access-Control-Allow-Headers':
						'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
				},
				body: JSON.stringify({
					email,
					phone_number: number,
					team_name: name,
					category,
					project_topic: topic,
					privacy_poclicy_accepted: privacy,
				}),
			}
		)

		const data = await res.json()

		setResponseData(data)

		console.log(data)
	}

	return (
		<div className=' bg-bg py-[5rem]'>
			<div className=' flex items-center justify-between w-[80vw] mx-auto'>
				<img src={img} alt='' className=' w-[40vw]' />

				<div className=' grid  shadow-md p-[3rem] rounded-md bg-white w-[40vw] bg-opacity-5'>
					<div className='grid grid-cols-2'>
						<div className=' mb-[2rem] mr-[1rem]'>
							<Input
								type={'text'}
								placeholder={'First Name'}
								isValue={name}
								id={'name'}
								name={'name'}
								change={(e) => setName(e.target.value)}
								label={"Team's Name"}
							/>
							{isError && responseData.first_name && (
								<p className='text-[0.7rem] text-red-600'>
									{responseData.email}
								</p>
							)}
						</div>
						<div className=' mb-[2rem]'>
							<Input
								type={'number'}
								placeholder={'Enter the name of your group'}
								isValue={number}
								id={'number'}
								name={'number'}
								change={(e) => setNumber(e.target.value)}
								label={'Phone'}
							/>
							{isError && responseData.first_name && (
								<p className='text-[0.7rem] text-red-600'>
									{responseData.email}
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-2'>
						<div className=' mb-[2rem] mr-[1rem]'>
							<Input
								id={'email'}
								name={'email'}
								type={'email'}
								placeholder={'Email'}
								isValue={email}
								change={(e) => setEmail(e.target.value)}
								label={'Email'}
							/>
							{isError && responseData.email && (
								<p className='text-[0.7rem] text-red-600'>
									{responseData.email}
								</p>
							)}
						</div>
						<div className=' mb-[2rem]'>
							<Input
								id={'text'}
								name={'topic'}
								type={'topic'}
								placeholder={'topic'}
								isValue={topic}
								change={(e) => setTopic(e.target.value)}
								label={'Project Topic'}
							/>
							{isError && responseData.email && (
								<p className='text-[0.7rem] text-red-600'>
									{responseData.email}
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-2'>
						<div className=' mb-[2rem] mr-[1rem]'>
							<Dropdown
								id={'category'}
								name={'category'}
								selected={'Select your category'}
								placeholder={'Category'}
								isValue={category}
								change={(e) => setCategory(e.target.value)}
								label={'Category'}
								selection={categories}
							/>
						</div>
						<div className=' mb-[2rem]'>
							<Dropdown
								id={'size'}
								name={'size'}
								selected={'Select'}
								placeholder={'size'}
								isValue={size}
								change={(e) => setSize(e.target.value)}
								label={'Group Size'}
								selection={group}
							/>
						</div>
					</div>

					<p className=' text-[0.7rem] text-secondary italic mb-[1rem]'>
						Please review your registration details before submitting
					</p>

					<div className=' mb-[1rem]'>
						<input
							type='checkbox'
							name='privacy'
							id='privacy'
							value={privacy}
							onChange={(e) => setPrivacy(e.target.value)}
							label={
								'I agreed with the event terms and conditions  and privacy policy'
							}
							className=' mr-[1rem]'
						/>
						<label
							htmlFor='privacy'
							className=' font-medium text-[0.7rem] text-white mb-[0.5rem]'
						>
							I agreed with the event terms and conditions and privacy policy
						</label>
					</div>

					<Buttons text={'Submit'} isFull={true} event={handleRegister} />
				</div>
			</div>
		</div>
	)
}

export default Create
