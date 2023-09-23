import Circle from './Circle'
import Date from './Date'
import TimelineText from './TimelineText'

const Timeline = () => {
	return (
		<div className=' py-[5rem] bg-bg bg-timeline_bg bg-center bg-no-repeat'>
			<div className='text-center text-white mb-[10rem]'>
				<h1 className=' font-bold text-lg mb-[1rem]'>Timeline</h1>
				<p className=' text-[0.7rem] w-[20vw] mx-auto'>
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>

			<div className='w-[70vw] mx-auto'>
				<div className=' grid grid-cols-3 items-center mb-[4rem]'>
					<div className=' justify-self-end'>
						<TimelineText
							header={'Hackathon Announcement'}
							paragraph={
								'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
							}
							justify={'right'}
						/>
					</div>
					<div className=' justify-self-center'>
						<Circle num={'1'} />
					</div>
					<Date date={'November 18, 2023'} />
				</div>

				<div className=' grid grid-cols-3 items-center mb-[5rem]'>
					<Date date={'November 18, 2023'} justify={'right'} />
					<div className=' justify-self-center'>
						<Circle num={'2'} />
					</div>
					<div className=' justify-self-start'>
						<TimelineText
							header={'Teams Registration begins'}
							paragraph={
								'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
							}
						/>
					</div>
				</div>

				<div className=' grid grid-cols-3 items-center mb-[4rem]'>
					<div className=' justify-self-end'>
						<TimelineText
							header={'Teams Registration ends'}
							paragraph={
								'Interested Participants are no longer Allowed to register'
							}
							justify={'right'}
						/>
					</div>
					<div className=' justify-self-center'>
						<Circle num={'3'} />
					</div>
					<Date date={'November 18, 2023'} />
				</div>

				<div className=' grid grid-cols-3 items-center mb-[4rem]'>
					<Date date={'November 18, 2023'} justify={'right'} />
					<div className=' justify-self-center'>
						<Circle num={'4'} />
					</div>
					<div className=' justify-self-start'>
						<TimelineText
							header={'Announcement of the accepted teams and ideas'}
							paragraph={
								'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
							}
						/>
					</div>
				</div>

				<div className=' grid grid-cols-3 items-center mb-[4rem]'>
					<div className=' justify-self-end'>
						<TimelineText
							header={'Getlinked Hackathon 1.0 Offically Begins'}
							paragraph={
								'Accepted teams can now proceed to build their ground breaking skill driven solutions'
							}
							justify={'right'}
						/>
					</div>
					<div className=' justify-self-center'>
						<Circle num={'5'} />
					</div>
					<Date date={'November 18, 2023'} />
				</div>

				<div className=' grid grid-cols-3 items-center mb-[4rem]'>
					<Date date={'November 18, 2023'} justify={'right'} />
					<div className=' justify-self-center'>
						<Circle num={'6'} />
					</div>
					<div className=' justify-self-start'>
						<TimelineText
							header={'Demo Day'}
							paragraph={
								'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Timeline
