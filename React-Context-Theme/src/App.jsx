import { useEffect, useState } from 'react';
import './App.css';
import { ThemeContextProvider } from './context/theme';
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {
	const [themeMode, setThemeMode] = useState('light');

	const lightTheme = () => {
		setThemeMode('light');
	};
	const darkTheme = () => {
		setThemeMode('dark');
	};

	// code change to set the theme
	useEffect(() => {
		let element = document.querySelector('html').classList;
		element.remove('light', 'dark');
		element.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
			<div className='flex flex-wrap min-h-screen items-center'>
				<div className='w-full'>
					<div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
						<ThemeButton />
					</div>

					<div className='w-full max-w-sm mx-auto'>
						<Card />
					</div>
				</div>
			</div>
		</ThemeContextProvider>
	);
}

export default App;
