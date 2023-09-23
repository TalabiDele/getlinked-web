import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import { useContext } from 'react'
import Context from './components/Context/Context'
import Loader from './components/Loader'
import Register from './Pages/Register'

function App() {
	const { loading } = useContext(Context)

	console.log(loading)

	return (
		<>
			<div className=''>
				{loading && <Loader />}
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default App
