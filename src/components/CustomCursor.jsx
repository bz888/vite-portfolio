import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor () {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
	const containerRef = useRef()

	function onMouseMove(e) {
		const {left, top} = containerRef.current.getBoundingClientRect()
		const newX = e.clientX - left
		const newY = e.clientY - top
		// const absDeltaX = Math.abs(mousePosition.x - newX)
		// const absDeltaY = Math.abs(mousePosition.y - newY)
    
		setMousePosition( { x: newX, y: newY })
	}
	return (
		<div 
			className='custom-cursor'
			ref={containerRef}
			onMouseMove={onMouseMove}
		>
			<motion.div
				className='cursor'
				style={{
					left: mousePosition.x,
					top: mousePosition.y 
				}}
				// animate={{}}
			/>
        
		
  
		</div>
	)
}