import { useEffect, useState } from 'react';
import { Message } from './Message';
export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'AndresDev',
		email: 'andresdeza@hotmail.com',
	});
	const { username, email } = formState;
	const onInputChange = ({ target: { value, name } }) => {
		// console.log(value, name);
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log('useEffect called!');
	}, []);
	useEffect(() => {
		// console.log('formState cambio!');
	}, [formState]);
	useEffect(() => {
		// console.log('Email cambio!');
	}, [email]);

	return (
		<>
			<h1>Formulario Simple</h1>

			<hr />
			<input
				type="text"
				name="username"
				placeholder="Username "
				className="form-control"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				name="email"
				placeholder="andresdeza@hotmail.com"
				className="form-control mt-2"
				value={email}
				onChange={onInputChange}
			/>
			{username === 'AndresDev2' && <Message />}
		</>
	);
};
