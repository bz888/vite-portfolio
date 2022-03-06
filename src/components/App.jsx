import { motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import '../css/app.css'
import Home from './Home'
import Projects from './Projects'

function App() {
	const navigate = useNavigate()
	const [currentMode, setCurrentMode] = useState('light')

	const modeBox = {
		backgroundColor: 'black'
	}
	return (
		<>
			<Routes>
				<Route path='/' element={<Home currentMode={currentMode}/>}/>
				<Route path='projects' element={<Projects currentMode={currentMode}/>}/>
			</Routes>

			

			<div className='mode'>

				<input type='checkbox' className='light-box' style={modeBox}/>
				<span className='light-text' >LIGHT</span>


				<input type='checkbox' className='dark-box' style={modeBox}/>
				<span className='dark-text' >DARK</span>

			</div>

		</>
	)
}

export default App
