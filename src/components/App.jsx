import { motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import '../css/app.css'
import { RandomGen } from './RandomGen'
function App() {
	const [currentMode, setCurrentMode] = useState('light')
	const [randomChar, setRandomChar] = useState('FULL-STACK')
	const [toggle, setToggle]= useState(true)
	useEffect(()=>{
		setRandomChar(()=> RandomGen(randomChar))
		
	},[])
	function timer(){

	}

	const lineStyle1 = {
		display: 'block',
		width: '70rem',
		height: '2px',
		backgroundColor: 'black'
	}
	
	const lineStyle2 = {
		display: 'block',
		width: '2px',
		height: '24rem',
		backgroundColor: 'black'
	}
	const lineStyle3 = {
		display: 'block',
		width: '2px',
		height: '36rem',
		backgroundColor: 'black'
	}

	const lineAnim1 = {
		x: [-1120, 0],
		duration: 0.1,
		ease: 'easeOut'
	}
	const lineAnim2 = {
		duration: 2,
		y: [-384, 0],
		ease: 'easeOut'
	}
	const lineAnim3 = {
		duration: 2,
		y: [576, 0],
		ease: 'easeOut'
	}

	const modeBox = {
		backgroundColor: 'black'
	}

	return (
		<>
			<div className='home'>
				<motion.div className='header-div'>
					<div className='header-text-div1'>
						<motion.h1 className='header-text1'>{randomChar}</motion.h1>
					</div>
					<div className='header-text-div2'>
						<motion.h1 className='header-text2'
							whileInView={{y: [-37,0]}}
						>DEVELOPER</motion.h1>
					</div>
				</motion.div>

				<motion.span 
					className='line-1'
					style={lineStyle1}
					whileInView={lineAnim1}
				/>
				<motion.span 
					className='line-2'
					style={lineStyle2}
					whileInView={lineAnim2}
				/>
				<motion.span 
					className='line-3'
					style={lineStyle3}
					whileInView={lineAnim3}
				/>

				<motion.div className='nav'>
					<ul className='nav-list'>
						<li>HOME</li>
						<li>PROJECTS</li>
						<li>CONTACT</li>
					</ul>
				</motion.div>

				<div className='name-div'>
					<motion.div className='header-name1'>
						<motion.h1 
							className='header-name-text1'
							whileInView={{y: [100,0]}}
						>BEN</motion.h1>
					</motion.div>
					<motion.div className='header-name2'>
						<motion.h1 
							className='header-name-text2'
							whileInView={{y: [-50,0]}}
						>ZHAO</motion.h1>
					</motion.div>
				</div>

				<div className='mode'>

					<input type='checkbox' className='light-box' style={modeBox}/>
					<span className='light-text' >LIGHT</span>


					<input type='checkbox' className='dark-box' style={modeBox}/>
					<span className='dark-text' >DARK</span>

				</div>
			</div>
		</>
	)
}

export default App
