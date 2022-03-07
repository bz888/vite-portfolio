import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

Contact.propTypes
export default function Contact ({currentMode}) {
	const navigate = useNavigate()


	const lineStyle1 = {
		display: 'block',
		width: '2px',
		height: '45rem',
		backgroundColor: currentMode
	}
  
	const lineAnim1 = {
		duration: 2,
		y: [720, 0],
		// ease: 'easeOut'
	}
	const lineAnim2 = {
		// duration: 2,
		x: [352, 0],
		// ease: 'easeOut'
	}

	const lineStyle2 = {
		display: 'block',
		width: '22rem',
		height: '2px',
		backgroundColor: currentMode
	}

	const nameStyle = {
		display: 'inline-block',
		color: currentMode
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
		case 'contact':
			navigate('/contact')
			break
		default:
			break
		}
	}
	return (
		<>
    	<motion.div className='name-p-div'>
				<motion.span
					className='p-name-header'
					whileInView={{x: [500, 0]}}
					style={nameStyle}
				>BEN ZHAO</motion.span>
				<motion.span 
					className='line-p-2'
					style={lineStyle2}
					whileInView={lineAnim2}
				/>
			</motion.div>

			<motion.span 
				className='line-p-1'
				style={lineStyle1}
				whileInView={lineAnim1}
			/>

			<motion.div className='contact-div'
				whileInView={{opacity: [0, 1]}}>
				<ul>
					<li><a style={{color: currentMode}} href='https://github.com/bz888' target='_blank' rel="noreferrer">Github ↗</a></li>
					<li><a style={{color: currentMode}} href='https://www.linkedin.com/in/bz888/' target='_blank' rel="noreferrer">Linkedin ↗</a></li>
				</ul>
			
			</motion.div>

    	<motion.div className='nav'>
				<ul className='nav-list'
					style={{color:currentMode}} >
					<motion.li
						whileInView={{
							x:  -30 ,
							y: [200, -185],
							rotate: -90}}
						id='home'
						onClick={handleClick}
					>HOME</motion.li>

					<motion.li
						whileInView={{
							x: -30 , 
							y: [100, 50],
							rotate: -90}}
						id='projects'
						onClick={handleClick}
					>PROJECTS</motion.li>

					<motion.li
						whileInView={{ y:[0, -570]}}
						id='contact'
						onClick={handleClick}
					>CONTACT</motion.li>
				</ul>
			</motion.div>
		</>
	)
}