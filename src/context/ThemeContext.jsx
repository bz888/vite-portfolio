import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkMode, lightMode } from '../styledComponents/Themes'
import { useNavigate } from 'react-router-dom'

const ThemeContext = createContext()

ModeProvider.propTypes
export function useTheme () {
	return useContext(ThemeContext)
}

export function ModeProvider({children}) {
	const navigate = useNavigate()
	const [currentMode, setCurrentMode] = useState('white')
	const [checkedState, setCheckedState] = useState({light: false, dark: true})

	function handleNav(e){
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
	const value = {
		checkedState,
		setCheckedState,
		handleNav,
		currentMode,
		setCurrentMode
	}

	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={currentMode === 'black' ? lightMode : darkMode}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
