'use client'

import { useState } from 'react'
import { useNuitralTheming } from '@nuitral/react-ui-suite'

const THEMES = ['nuitral', 'pop', 'fluffy']

const Personalization = () => {
	const { manageDarkMode, isDarkMode, manageTheme, themeName } =
		useNuitralTheming({
			theme: 'nuitral',
			darkMode: false,
			rootId: 'demo-app',
			saveSettings: true,
		})

	const [theme, setTheme] = useState(themeName)

	const changeTheme = (newTheme: string) => {
		setTheme(newTheme)
		manageTheme(newTheme)
	}

	return (
		<div style={{ display: 'flex', gap: '0.5rem' }}>
			<button onClick={manageDarkMode}>
				{isDarkMode ? 'Dark' : 'Light'} mode
			</button>
			<select value={theme} onChange={e => changeTheme(e.target.value)}>
				{THEMES.map(name => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Personalization
