import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Projects () {
	const navigate = useNavigate()
	const lineAnim1 = {
		duration: 2,
		y: [-384, 0],
		// ease: 'easeOut'
	}

	const lineStyle1 = {
		display: 'block',
		width: '2px',
		height: '24rem',
		backgroundColor: 'black'
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
    	<motion.span 
				className='line-p-1'
				style={lineStyle1}
				whileInView={lineAnim1}
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
		</>
	)
}