import { useState, useContext } from 'react'
import Input from './Input'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import Buttons from './Buttons'
import axios from 'axios'
import img from '../assets/contact.png'
import Context from './Context/Context'
import Modal from './Modal'

const ContactComponent = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [number, setNumber] = useState()
	const [responseData, setResponseData] = useState()

	const { setLoading, setIsSent, isError, setIsError, isSent } =
		useContext(Context)

	const handleContact = async () => {
		setLoading(true)

		const res = await fetch(
			`${process.env.REACT_BASE_URL}/hackathon/contact-form`,
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
					first_name: name,
					message,
				}),
			}
		)

		const data = await res.json()

		setResponseData(data)

		if (res.ok) {
			setIsSent(true)

			setEmail('')
			setNumber()
			setName('')
			setMessage('')
		} else {
			setIsError(true)

			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className=' bg-bg py-[5rem] bg-criteria_bg relative'>
			{isSent && (
				<Modal header={'Message Sent!'} event={() => setIsSent(false)} />
			)}
			<div className=''>
				<img
					src={img}
					alt=''
					className=' absolute left-0 right-0 top-0 z-[0]'
				/>
			</div>
			<div className=' flex justify-between items-center w-[70vw] mx-auto relative z-[1]'>
				<div className=' text-white text-[0.7rem]'>
					<h1 className='text-purple font-bold text-xl mb-[2rem]'>
						Get in touch
					</h1>
					<div className=' '>
						<p className=' mb-[1rem] w-[7rem]'>Contact Information</p>
						<p className=' mb-[1rem] w-[7rem]'>
							27,Alara Street Yaba 100012 Lagos State
						</p>
						<p className=' mb-[1rem] w-[7rem]'>Call Us : 07067981819</p>
						<p className=' mb-[1rem] w-[12rem]'>
							we are open from Monday-Friday 08:00am - 05:00pm
						</p>

						<p className='text-purple font-semibold mb-[0.5rem]'>Share on</p>
						<div className=' flex items-center w-[5rem] justify-between'>
							<FaInstagram />
							<RiTwitterXFill />
							<FaFacebookF />
							<FaLinkedinIn />
						</div>
					</div>
				</div>

				<div className=' grid  shadow-md p-[3rem] rounded-md bg-white w-[40vw] bg-opacity-5'>
					<div className=' mb-[2rem]'>
						<Input
							type={'text'}
							placeholder={'First Name'}
							isValue={name}
							id={'name'}
							name={'name'}
							change={(e) => setName(e.target.value)}
						/>
						{isError && responseData.first_name && (
							<p className='text-[0.7rem] text-red-600'>{responseData.email}</p>
						)}
					</div>
					<div className=' mb-[2rem]'>
						<Input
							id={'email'}
							name={'email'}
							type={'email'}
							placeholder={'Email'}
							isValue={email}
							change={(e) => setEmail(e.target.value)}
						/>
						{isError && responseData.email && (
							<p className='text-[0.7rem] text-red-600'>{responseData.email}</p>
						)}
					</div>
					<div className=' mb-[2rem]'>
						<Input
							id={'number'}
							name={'number'}
							type={'number'}
							placeholder={'Phone Number'}
							isValue={number}
							change={(e) => setNumber(e.target.value)}
						/>
					</div>

					<div className=' mb-[2rem]'>
						<textarea
							name='message'
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							cols='30'
							rows='10'
							placeholder='Message'
							className='border border-white rounded-sm bg-transparent text-sm p-[0.5rem] w-full mb-[0.5rem] text-white placeholder:text-sm'
						></textarea>
						{isError && responseData.message && (
							<p className='text-[0.7rem] text-red-600'>{responseData.email}</p>
						)}
					</div>

					<Buttons text={'Submit'} event={handleContact} />
				</div>
			</div>
		</div>
	)
}

export default ContactComponent
