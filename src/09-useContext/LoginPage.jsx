import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<h1>LoginPage</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<button
				onClick={() =>
					setUser({
						id: 123,
						nombre: 'Andres Deza',
						email: 'andresdezadev@gmail.com',
					})
				}
			>
				Setear Usuario
			</button>
		</>
	);
};
