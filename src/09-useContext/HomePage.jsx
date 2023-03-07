import { UserContext } from './context/UserContext';
import { useContext } from 'react';

export const HomePage = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<h1>HomePage</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
};
