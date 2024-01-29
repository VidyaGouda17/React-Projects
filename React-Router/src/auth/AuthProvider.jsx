import { useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children, isSignedIn }) => {
	const [user] = useState(isSignedIn ? { id: 1 } : null);
	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
