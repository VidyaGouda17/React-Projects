import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import User from './components/User';

function App() {
	return (
		<>
			<UserContextProvider>
				<Login />
				<User />
			</UserContextProvider>
		</>
	);
}

export default App;
