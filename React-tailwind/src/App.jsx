import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Card username={'Vidya'} btnText={'Click Me'} />
				<Card username={'Nonstopio'} btnText={'Click Me'} />
			</div>
		</>
	);
}

export default App;
