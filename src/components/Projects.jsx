import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useIsMedium, useIsSmall, useIsiPad, useIsMobile } from './useMediaQuery'

Projects.propTypes
export default function Projects ({ currentMode }) {
	const { handleNav } = useTheme()
	const isMedium = useIsMedium()
	const isSmall = useIsSmall()
	const isPad = useIsiPad()
	const isMobile = useIsMobile()
	const [hoverToggle, setHoverToggle] = useState(false)
	const [description, setDescription] = useState('')

	function handleHover(e){
		setHoverToggle(!hoverToggle)
		switch(e.target.id){
		case 'Two Truths One Lie':
			setDescription('Two Truths and a Lie is a project comissioned by artist Darryl Chin. The work serves as a response to the current atmosphere of misinformation and distrust. \n The project uses Text-Cortex (ai-text generator API) to proccess user input, and the data is then rendered into the format of News page.')
			break
		case 'Afternewmedia':
			setDescription('After new media is commissioned by artist William Linscott. The application uses youtube APIs to render videos that has never been seen before (0 views), however, the title parameters are set to "DSC, MOV, IMG" in order to narrow down search attempts and minimise.')
			break
		case 'Brainf*ck interpreter':
			setDescription('A basic interpreter for the programming language BrainFuck, it is very amatuer interpeter and cannot handle powerful brainfuck codes. ')
			break
		case 'SideScroller':
			setDescription('A sidescroll arcade-styled game built with phaser.js. This was the graduation project I had with EDA. The project consisted of 4 members, agile workflow and a total of 420hours within 7 days.')
			break
		case 'Somezine':
			setDescription('This was my graduation project for BFA. The project serves as a response to the restrictions imposed by the pandemic. The work mainly consists of multiple 3D renderings and video works as an expression of virtual freedom juxaposing the physical limitations the world faced. \n Tech stack: Unity, Maya, Blender, basic HTML/CSS and multiple Adobe suites.')
			break
		default:
			setDescription('')
			break
			
		}
	}
	const descriptionMenuAnimate = {
		start: {
			display: 'block',
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut'
			}
		},
		end: {
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: 'easeIn'
			},
			transitionEnd:{
				display: 'none'
			}
		}
	}


	return (
		<>
    	<motion.span 
				className='line-p-1'
				style={{backgroundColor: currentMode}}
				animate={{y: [720, 0]}}
				transition={{duration: 1.2, ease: 'easeOut' }}
			/>

			<motion.div className='name-p-div'>
				<motion.span
					className='p-name-header'
					animate={{x: [500, 0]}}
					style={{color: currentMode}}
				>BEN ZHAO</motion.span>
				<motion.span 
					className='line-p-2'
					style={{backgroundColor: currentMode}}
					animate={{x: [352, 0]}}
				/>
			</motion.div>

			<motion.div 
				initial='end'
				animate={hoverToggle ? 'start' : 'end'}
				variants={descriptionMenuAnimate}
				className='project-des'>
				<p style={{color:currentMode}}>{description}</p>
			</motion.div>

			<motion.div
				className='projects-div'
			>
				<motion.h2 style={{color:currentMode}} className='project-catalogue'
					animate={{opacity: [0, 1]}}
				>■ Projects &#40;web apps&#41;</motion.h2>
		
				<motion.a className='project-item'
					id='Two Truths One Lie'
					onHoverEnd={handleHover}
					onHoverStart={handleHover}
					whileHover={{opacity: 0.5}}
					href='https://www.depotartspace.co.nz/event/two-truths/'
					target='_blank' rel="noreferrer"
					animate={{x: [200, 0]}}>
					<div style={{color:currentMode}} className='project-title'>Two Truths One Lie</div>
					<div style={{color:currentMode}} className='project-info'>2022/Commission</div>
				</motion.a>

				<motion.a className='project-item'
					id='Afternewmedia'
					onHoverEnd={handleHover}
					onHoverStart={handleHover}
					whileHover={{opacity: 0.5}}
					href='https://afternewmedia.herokuapp.com/'
					target='_blank' rel="noreferrer"
					animate={{x: [300, 0]}}>
					<div style={{color:currentMode}} className='project-title'>Afternewmedia</div>
					<div style={{color:currentMode}} className='project-info'>2021/Commission</div>
				</motion.a>
				<motion.a className='project-item'
					id='Brainf*ck interpreter'
					onHoverEnd={handleHover}
					onHoverStart={handleHover}
					whileHover={{opacity: 0.5}}
					href='https://brainfck-interpreter.herokuapp.com/'
					target='_blank' rel="noreferrer"
					animate={{x: [400, 0]}}>
					<div style={{color:currentMode}} className='project-title'>Brainf*ck interpreter</div>
					<div style={{color:currentMode}} className='project-info'>2021/Personal</div>
				</motion.a>
				<motion.a className='project-item'
					id='SideScroller'
					onHoverEnd={handleHover}
					onHoverStart={handleHover}
					whileHover={{opacity: 0.5}}
					href='https://git-gud-eda-test.herokuapp.com/'
					target='_blank' rel="noreferrer"
					animate={{x: [500, 0]}}>
					<div style={{color:currentMode}} className='project-title'>SideScroller</div>
					<div style={{color:currentMode}} className='project-info'>2021/Course work</div>
				</motion.a>
				<motion.a className='project-item'
					id='Somezine'
					onHoverEnd={handleHover}
					onHoverStart={handleHover}
					whileHover={{opacity: 0.5}}
					href='https://bz888.github.io/portfolio-v1/'
					target='_blank' rel="noreferrer"
					animate={{x: [500, 0]}}>
					<div style={{color:currentMode}} className='project-title'>Somezine</div>
					<div style={{color:currentMode}} className='project-info'>2020/Graduation Project</div>
				</motion.a>

			</motion.div>

			<motion.div className='nav'>
				<ul className='nav-list'
					style={{color:currentMode}}>
					<motion.li
						transition={{duration: 0.6}}
						animate={isSmall ?  
							{x: -30 ,
								y: [200, -135],
								rotate: -90} 
							: isPad ? 	
								{x: -100 ,
									y: [200, -400],
									rotate: -90}
								: isMobile ? 
									{x: -80 ,
										y: [0, -250],
										rotate: -90} 
									:{
										x:  -30 ,
										y: [200, -170],
										rotate: -90}
						}
						id='home'
						onClick={(e)=> handleNav(e)}
					>HOME</motion.li>

					<motion.li
						transition={{duration: 0.7}}
						animate={isSmall ? {y: [0, -315]} : isMedium ? {y:[0, -345]}: isPad ? {y: -673, x: -20} : isMobile ? {y: '-70vh'} : { y:[0, -480]}}
						id='projects'
						onClick={(e)=> handleNav(e)}
					>PROJECTS</motion.li>

					<motion.li
						transition={{duration: 0.6}}
						animate={isPad ? 
							{ x: -100 , 
								y: [200, -230],
								rotate: -90}
							: isMobile ? {
								x: -80 , 
								y: [0, -170],
								rotate: -90} 
								: {x: -30 , 
									y: [200, 0],
									rotate: -90}}
						id='contact'
						onClick={(e)=> handleNav(e)}
					>CONTACT</motion.li>
				</ul>
			</motion.div>
		</>
	)
}