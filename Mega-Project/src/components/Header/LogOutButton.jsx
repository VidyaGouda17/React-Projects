import React from 'react';
import authService from '../../appwrite/auth';
import { logOut } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

function LogOutButton() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		authService
			.logOutCurrentUser()
			.then((res) => {
				dispatch(logOut());
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<button
			className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
			onClick={logoutHandler}>
			LogOutButton
		</button>
	);
}

export default LogOutButton;
