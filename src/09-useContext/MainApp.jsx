import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>MainApp</h1>
			<hr />
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</UserProvider>
	);
};
