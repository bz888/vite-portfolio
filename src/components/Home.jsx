
import { motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/app.css'
import { RandomGen } from './RandomGen'

export default function Home () {
	const navigate = useNavigate()
	const [randomChar, setRandomChar] = useState('FULL-STACK')
	const [repeatVal, setRepeatVal] = useState(0)
	useEffect(()=>{
		if (repeatVal < 20) {
			loop()
		}
		if (repeatVal >= 20) {
			setRandomChar(()=> 'FULL-STACK')
		}
	},[repeatVal])

	function loop () {
		setRandomChar(RandomGen('FULL-STACK'))	
		setTimeout(()=>setRepeatVal(repeatVal + 1), 60)
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
		// ease: 'easeOut'
	}
	const lineAnim2 = {
		duration: 2,
		y: [-384, 0],
		// ease: 'easeOut'
	}
	const lineAnim3 = {
		duration: 2,
		y: [576, 0],
		// ease: 'easeOut'
	}

	 function handleClick (e) {
		console.log(e.target.id)
		const id = e.target.id
		switch(id){
		case 'home':
			navigate('/')
			break
		case 'projects':
			navigate('/projects')
			break
		case 'contacts':
			navigate('/contacts')
			break
		default:
			break
		}
	}
	return (
		<>
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
					<motion.li
						whileInView={{x: [ -50 , 0 ]}}
						id='home'
						onClick={handleClick}
					>HOME</motion.li>

					<motion.li
						whileInView={{x: [ -150 , 0 ]}}
						id='projects'
						onClick={handleClick}
					>PROJECTS</motion.li>

					<motion.li
						whileInView={{x: [ -200 , 0 ]}}
						id='contact'
						onClick={handleClick}
					>CONTACT</motion.li>
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
		</>
	)
}
