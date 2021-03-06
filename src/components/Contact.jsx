import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import {  useIsMedium, useIsSmall, useIsiPad, useIsMobile} from './useMediaQuery'

Contact.propTypes
export default function Contact ({currentMode}) {
	const { handleNav } = useTheme()
	const isMedium = useIsMedium()
	const isSmall = useIsSmall()
	const isPad = useIsiPad()
	const isMobile = useIsMobile()
	const lineStyle1 = {
		backgroundColor: currentMode
	}
  

	return (
		<>
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

			<motion.span 
				className='line-p-1'
				style={lineStyle1}
				animate={{y: [720, 0]}}
				transition={{duration: 1.2, ease: 'easeOut'}}
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
						transition={{duration: 0.7}}
						animate={isSmall ?  
							{x:  -30 ,
								y: [200, -135],
								rotate: -90} 
							: isPad ? 	
								{x: -100 ,
									y: [200, -400],
									rotate: -90}
								:isMobile ? 
									{x: -80 ,
										y: [0, -250],
										rotate: -90}
									:{
										x:  -30 ,
										y: [200, -185],
										rotate: -90}
						}
						id='home'
						onClick={(e)=> handleNav(e)}
					>HOME</motion.li>

					<motion.li
						transition={{duration: 0.7}}
						animate={isPad ? 
							{ x: -100 , 
								y: [200, -160],
								rotate: -90}
							:isMobile ?
								{	x: -80 , 
									y: [0, -100],
									rotate: -90}
								: {
									x: -30 , 
									y: [100, 50],
									rotate: -90}}
						id='projects'
						onClick={(e)=> handleNav(e)}
					>PROJECTS</motion.li>

					<motion.li
						transition={{duration: 0.7}}
						animate={isSmall ? {y: [0, -380]} : isMedium ? {y: [0, -420]} : isPad ? {y: -753, x: -20} : isMobile ? {y: '-78vh'} : { y:[0, -565]}}
						id='contact'
						onClick={(e)=> handleNav(e)}
					>CONTACT</motion.li>
				</ul>
			</motion.div>
		</>
	)
}