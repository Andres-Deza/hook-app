import { useState } from 'react';
import { useForm } from './../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { onInputChange, formState, todoInput, onResetForm } = useForm({
		todoInput: '',
	});
	const inputTodo = {
		id: new Date().getTime() * 4,
		description: '',
		done: false,
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (todoInput <= 1) return;
		onNewTodo({
			...inputTodo,
			description: todoInput,
		});
		onResetForm();
	};
	return (
		<form action="" onSubmit={onFormSubmit}>
			<input
				type="text"
				name="todoInput"
				placeholder="Que hay que hacer?"
				className="form-control"
				id=""
				value={todoInput}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-1">
				Agregar
			</button>
		</form>
	);
};
