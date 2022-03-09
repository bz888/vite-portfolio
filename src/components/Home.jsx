
import { AnimatePresence, motion } from 'framer-motion'
import React , { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
// import { useNavigate } from 'react-router-dom'
import '../css/app.css'
import { RandomGen } from './RandomGen'

Home.propTypes
export default function Home ({ currentMode }) {
	const bio = 'I am young developer with a passion for tech and a mission to present the endless possibilites of web development, I am always in pursuit of new knowledge through experiments and projects.'
	const { handleNav } = useTheme()
	const [randomChar, setRandomChar] = useState('FULL-STACK')
	// const [randomParagraph, setRandomParagraph] = useState(bio)
	const [repeatVal, setRepeatVal] = useState(0)

	useEffect(()=>{
		if (repeatVal < 20) {
			loop()
			// setRandomParagraph(()=> RandomGen(bio))
		}
		if (repeatVal >= 20) {
			setRandomChar(()=> 'FULL-STACK')
			// setRandomParagraph(()=> bio)
			return () => {setRepeatVal(()=> 0)}
		}
	},[repeatVal])

	function loop () {
		setRandomChar(RandomGen('FULL-STACK'))	
		setTimeout(()=>setRepeatVal(repeatVal + 1), 60)
	}



	const lineStyle1 = {
		display: 'block',
		// width: '70rem',
		// height: '2px',
		backgroundColor: currentMode
	}
	
	const lineStyle2 = {
		display: 'block',
		// width: '2px',
		// height: '24rem',
		backgroundColor: currentMode
	}
	const lineStyle3 = {
		display: 'block',
		// width: '2px',
		// height: '36rem',
		backgroundColor: currentMode
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
	const lineVariant1 = {
		start: {
			x: [-1120, 0]
		},
		end: {
			x: [0, -1120]
		}
	}

	return (
		<>
			<motion.div className='header-div'>
				<div className='header-text-div1'>
					<motion.h1 className='header-text1' 
						style={{color:currentMode}}
					>{randomChar}</motion.h1>
				</div>
				<div className='header-text-div2'>
					<motion.h1 className='header-text2'
						animate={{y: [-37,0]}}
						style={{color:currentMode}}
					>DEVELOPER</motion.h1>
				</div>
			</motion.div>

			<motion.span 
				className='line-1'
				variants={lineVariant1}
				style={lineStyle1}
				animate='start'
				transition={{duration: 1.2}}
			/>

			<motion.span 
				className='line-2'
				style={lineStyle2}
				animate={lineAnim2}
			/>
			<motion.span 
				className='line-3'
				style={lineStyle3}
				animate={lineAnim3}
			/>
			<motion.div className='home-info'
				transition={{duration: 1.2}}
				animate={{opacity: [0, 1]}}>
				<p style={{color:currentMode}}>{bio}</p>	
			</motion.div>

			<motion.div className='nav'>
				<ul className='nav-list'>
					{/* <motion.li
						animate={{x: [ -150 , 0 ]}}
						transition={{duration: 1}}
						id='home'
						onClick={(e)=> handleNav(e)}
						style={{color:currentMode}}
					>HOME</motion.li> */}

					<motion.li
						animate={{x: [ -150 , 0 ]}}
						id='projects'
						onClick={(e)=> handleNav(e)}
						style={{color:currentMode}}
					>PROJECTS</motion.li>

					<motion.li
						animate={{x: [ -200 , 0 ]}}
						id='contact'
						onClick={(e)=> handleNav(e)}
						style={{color:currentMode}}
					>CONTACT</motion.li>
				</ul>
			</motion.div>

			<div className='name-div'>
				<motion.div className='header-name1'>
					<motion.h1 
						className='header-name-text1'
						animate={{y: [100,0]}}
						style={{color:currentMode}}
					>BEN</motion.h1>
				</motion.div>
				<motion.div className='header-name2'>
					<motion.h1 
						className='header-name-text2'
						animate={{y: [-50,0]}}
						style={{color:currentMode}}
					>ZHAO</motion.h1>
				</motion.div>
			</div>
		
		</>
	)
}
