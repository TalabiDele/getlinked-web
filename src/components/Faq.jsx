import Headers from './Headers'
import Paragraph from './Paragraph'
import img from '../assets/faq-img.png'
import FaqComponent from './FaqComponent'

const Faq = () => {
	return (
		<div className=' bg-bg relative border-b border-white border-opacity-10 py-[5rem]'>
			<div className=' flex justify-between w-[80vw] mx-auto items-center relative z-[3]'>
				<div className=''>
					<Headers text={'Frequently Ask'} span={'Question'} />
					<Paragraph
						text={
							'We got answers to the questions that you might want to ask about getlinked Hackathon 1.0'
						}
					/>

					<div className=' mt-[3rem]'>
						<FaqComponent
							header={'Can I work on a project I started before the hackathon?'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
						<FaqComponent
							header={'What happens if I need help during the hackathon?'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
						<FaqComponent
							header={
								'What happens if I don&apos;t have an idea for a project?'
							}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
						<FaqComponent
							header={'Can I join a team or do I have to come with one?'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
						<FaqComponent
							header={'What happens after the hackathon ends'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
						<FaqComponent
							header={'Can I work on a project I started before the hackathon?'}
							paragraph={
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus temporibus exercitationem dolorem distinctio recusandae a tempora magnam libero atque, consequatur aperiam provident perferendis ipsum veritatis. Sint facilis ea natus?'
							}
						/>
					</div>
				</div>

				<div className=''>
					<img src={img} alt='' className=' w-[40vw]' />
				</div>
			</div>
		</div>
	)
}

export default Faq
