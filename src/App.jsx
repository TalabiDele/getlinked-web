import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
	return (
		<>
			<div className=''>
				<Nav />
				<Routes>
					<Route path='' />
				</Routes>
			</div>
		</>
	)
}

export default App
