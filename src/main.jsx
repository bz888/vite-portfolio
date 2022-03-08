import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { ModeProvider } from './context/ThemeContext'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ModeProvider>
				<App />
			</ModeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
