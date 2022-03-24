import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { ModeProvider } from './context/ThemeContext'

ReactDOM.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<Router>
			<ModeProvider>
				<App />
			</ModeProvider>
		</Router>
		{/* </BrowserRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
)
