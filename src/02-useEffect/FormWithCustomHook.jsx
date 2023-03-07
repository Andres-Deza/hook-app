import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from './../hooks/useForm';
export const FormWithCustomHook = () => {
	const { username, email, onInputChange, formState, password, onResetForm } = useForm({
		username: '',
		email: '',
		password: '',
	});

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
				placeholder="Correo Eléctronico"
				className="form-control mt-2"
				value={email}
				onChange={onInputChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Contraseña"
				className="form-control mt-2"
				value={password}
				onChange={onInputChange}
			/>

			<button onClick={onResetForm} className="btn btn-primary mt-2">
				Borrar
			</button>
			{username === 'AndresDev2' && <Message />}
		</>
	);
};
