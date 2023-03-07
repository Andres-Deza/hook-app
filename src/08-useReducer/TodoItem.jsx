import React from 'react';

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<span
				onClick={() => onToggleTodo(todo.id)}
				className={`align-items-center ${todo.done ? 'text-decoration-line-through' : ''}`}
			>
				{todo.description}
			</span>
			<button className="btn btn-danger" onClick={onRemoveTodo}>
				Borrar
			</button>
		</li>
	);
};
