import Awards from '../components/Awards.jsx'
import Criteria from '../components/Criteria.jsx'
import Faq from '../components/FAQ.jsx'
import Intro from '../components/Intro'
import Landing from '../components/Landing'
import Partners from '../components/Partners.jsx'
import Privacy from '../components/Privacy.jsx'
import Rules from '../components/Rules'
import Timeline from '../components/Timeline.jsx'

const Home = () => {
	return (
		<div>
			<Landing />
			<Intro />
			<Rules />
			<Criteria />
			<Faq />
			<Timeline />
			<Awards />
			<Partners />
			<Privacy />
		</div>
	)
}

export default Home
