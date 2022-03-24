// import { motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'

import { GlobalStyles } from './GlobalStyles'

import '../css/app.css'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import { useTheme } from '../context/ThemeContext'

function App() {

	const {currentMode, setCurrentMode, setCheckedState, checkedState} = useTheme()
	const modeBox = {
		borderColor: 'black',
		backgroundColor: 'black'
	}

	function handleChange (e) {
		const colorProfile = e.target.value
		if (colorProfile === 'light') {
			setCheckedState({light: true, dark: false})
			setCurrentMode('black')
		} else if (colorProfile === 'dark') {
			setCheckedState({light: false, dark: true})
			setCurrentMode('white')
		} 
	}
	return (
		
		<>
			<GlobalStyles/>
			<Routes>
				<Route path='/' element={<Home currentMode={currentMode}/>}/>
				<Route path='projects' element={<Projects currentMode={currentMode}/>}/>
				<Route path='contact' element={<Contact currentMode={currentMode}/>}/>
			</Routes>

			<div className='mode'>
				<label className='checkbox-container' style={{color:currentMode}}>
					<input checked={checkedState.light} value='light' type='radio' className='light-box' onChange={handleChange} style={modeBox}/>
					<span className='checkmark' style={{borderColor: currentMode}}></span>
					<span>LIGHT</span>
				</label>

				<label className='checkbox-container' style={{color:currentMode}}>
					<input checked={checkedState.dark} value='dark' type='radio' className='dark-box' onChange={handleChange} style={modeBox}/>
					<span className='checkmark' style={{borderColor: currentMode}}></span>
					<span>DARK</span>
				</label>

			</div>

		</>
		
	)
}

export default App
