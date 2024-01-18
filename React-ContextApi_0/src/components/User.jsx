import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function User() {
	const { user } = useContext(UserContext);
	console.log(user);
	return (
		<div>
			<div className='user-info'>{`Welcome ${user?.username}`}</div>
		</div>
	);
}

export default User;
