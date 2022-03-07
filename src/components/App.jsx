// import { motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { darkMode, lightMode } from '../styledComponents/Themes'
import '../css/app.css'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'

function App() {
	// const navigate = useNavigate()
	const [currentMode, setCurrentMode] = useState('black')

	const modeBox = {
		borderColor: 'black',
		backgroundColor: 'black'
	}

	function handleChange (e) {
		e.preventDefault()
		const colorProfile = e.target.value
		if (colorProfile === 'light') {
			setCurrentMode('black')
		} else if (colorProfile === 'dark') {
			setCurrentMode('white')
		} 
	}
	return (
		<ThemeProvider theme={currentMode === 'black' ? lightMode : darkMode}>
			<>
				<GlobalStyles/>
				<Routes>
					<Route path='/' element={<Home currentMode={currentMode}/>}/>
					<Route path='projects' element={<Projects currentMode={currentMode}/>}/>
					<Route path='contact' element={<Contact currentMode={currentMode}/>}/>
				</Routes>

			

				<div className='mode'>

					<input value='light' type='checkbox' className='light-box' onChange={handleChange} style={modeBox}/>
					<span className='light-text' style={{color:currentMode}}>LIGHT</span>


					<input value='dark' type='checkbox' className='dark-box' onChange={handleChange} style={modeBox}/>
					<span className='dark-text' style={{color:currentMode}}>DARK</span>

				</div>

			</>
		</ThemeProvider>
	)
}

export default App
