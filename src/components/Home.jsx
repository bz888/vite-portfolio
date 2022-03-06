import React from 'react'
export default function Home () {
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
