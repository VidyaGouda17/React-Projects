import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import Github, { githubInfoLoader } from './components/Github.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import SignUp from './components/SignUp.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path='' element={<Home />} />
			<Route path='login' element={<SignUp />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contact />} />
			<Route
				path='user/:userid'
				element={
					<ProtectedRoute>
						<User />
					</ProtectedRoute>
				}
			/>
			<Route
				loader={githubInfoLoader}
				path='github'
				element={
					<ProtectedRoute>
						<Github />
					</ProtectedRoute>
				}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider isSignedIn={true}>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
