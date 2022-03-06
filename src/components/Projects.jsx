import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Projects () {
	const navigate = useNavigate()


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


	const lineStyle1 = {
		display: 'block',
		width: '2px',
		height: '45rem',
		backgroundColor: 'black'
	}
	const lineStyle2 = {
		display: 'block',
		width: '22rem',
		height: '2px',
		backgroundColor: 'black'
	}
	const lineStyle3 = {
		display: 'block',
		width: '22rem',
		height: '2px',
		backgroundColor: 'black'
	}
	const nameStyle = {
		display: 'inline-block',
		color: 'black'
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
			<motion.span 
				className='line-p-3'
				style={lineStyle3}
				whileInView={lineAnim2}
			/>

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

			<motion.div
				className='projects-div'
			>
				<motion.ul className='project-ul'>
					<li>Projects &#40;web apps&#41;</li>
					<li>Two Truths One Lie</li>
					<li>Afternewmedia</li>
					<li>Brainf*ck interpreter</li>
					<li>SideScroller</li>
				</motion.ul>

			</motion.div>

			<motion.div className='nav'>
				<ul className='nav-list'>
					<motion.li
						whileInView={{
							x:  -30 ,
							y: [200, -170],
							rotate: -90}}
						id='home'
						onClick={handleClick}
					>HOME</motion.li>

					<motion.li
						whileInView={{ y:[0, -480]}}
						id='projects'
						onClick={handleClick}
					>PROJECTS</motion.li>

					<motion.li
						whileInView={{
							x: -30 , 
							y: [200, 0],
							rotate: -90}}
						id='contact'
						onClick={handleClick}
					>CONTACT</motion.li>
				</ul>
			</motion.div>
		</>
	)
}