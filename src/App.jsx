import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Contact from './Pages/Contact'

function App() {
	return (
		<>
			<div className=''>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default App
