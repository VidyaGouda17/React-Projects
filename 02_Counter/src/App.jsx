import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	let [count, setCount] = useState(5);

	const addValue = () => {
		console.log(count, 'couter');
		setCount(count + 1);
	};

	const removeValue = () => {
		count > 0 ? setCount(count - 1) : 0;
	};
	return (
		<>
			<h1>Welcome to our first React Project</h1>
			<div>Counter value is : {count}</div>
			<button style={{ margin: '10px', background: 'Blue' }} onClick={addValue}>
				Increase Value Value
			</button>
			<br />
			<button
				style={{ margin: '10px', background: 'Blue' }}
				onClick={removeValue}>
				Decrease Value Value
			</button>
		</>
	);
}

export default App;
