import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const MyApp = () => {
	return <div>Hello React Js</div>;
};

// create a function
const anotherEle = (
	<a href='https://googl.com' target='_blank'>
		Click Me{' '}
	</a>
);

// this is object and this is called into render but this is the property this is not accepted in the render
// because render accept the function or JSX syntax is not correct
// const ReactElement = {
// 	type: 'a',
// 	props: {
// 		href: 'https://googl.com',
// 		target: '_black',
// 	},
// 	children: 'Click Me to Visit Google',
// };

let userName = 'Vidya';
const element = React.createElement(
	'a',
	{
		href: 'https://www.google.com',
		target: '_blank',
	},
	'Click me to visit google',
	userName
);
// ReactDOM.createRoot(document.getElementById('root')).render(ReactElement);

//ReactDOM.createRoot(document.getElementById('root')).render(anotherEle);

ReactDOM.createRoot(document.getElementById('root')).render(element);
