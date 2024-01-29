import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
	const user = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		console.log('user', user);
		if (user === null) {
			navigate('/login', { replace: true });
		}
	}, [navigate, user]);

	return children;
};

export default ProtectedRoute;
