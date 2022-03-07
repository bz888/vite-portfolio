import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

Projects.propTypes
export default function Projects ({ currentMode }) {
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
		backgroundColor: currentMode
	}
	const lineStyle2 = {
		display: 'block',
		width: '22rem',
		height: '2px',
		backgroundColor: currentMode
	}
	const lineStyle3 = {
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
    	<motion.span 
				className='line-p-1'
				style={lineStyle1}
				whileInView={lineAnim1}
			/>
			{/* <motion.span 
				className='line-p-3'
				style={lineStyle3}
				whileInView={lineAnim2}
			/> */}

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
				<motion.div className='project-list'>
					<motion.h2 style={{color:currentMode}} className='project-catalogue'
						whileInView={{opacity: [0, 1]}}
					>■ Projects &#40;web apps&#41;</motion.h2>
					<motion.a className='project-item'
						href=''
						whileInView={{x: [200, 0]}}>
						<div style={{color:currentMode}} className='project-title'>Two Truths One Lie</div>
						<div style={{color:currentMode}} className='project-info'>2022/Commission</div>
					</motion.a>
					<motion.a className='project-item'
						href='https://afternewmedia.herokuapp.com/'
						whileInView={{x: [300, 0]}}>
						<div style={{color:currentMode}} className='project-title'>Afternewmedia</div>
						<div style={{color:currentMode}} className='project-info'>2021/Commission</div>
					</motion.a>
					<motion.a className='project-item'
						href=''
						whileInView={{x: [400, 0]}}>
						<div style={{color:currentMode}} className='project-title'>Brainf*ck interpreter</div>
						<div style={{color:currentMode}} className='project-info'>2021/Personal</div>
					</motion.a>
					<motion.a className='project-item'
						href='https://git-gud-eda-test.herokuapp.com/'
						whileInView={{x: [500, 0]}}>
						<div style={{color:currentMode}} className='project-title'>SideScroller</div>
						<div style={{color:currentMode}} className='project-info'>2021/Course work</div>
					</motion.a>
				</motion.div>

			</motion.div>

			<motion.div className='nav'>
				<ul className='nav-list'
					style={{color:currentMode}}>
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