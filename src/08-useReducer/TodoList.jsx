import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} onRemoveTodo={() => onRemoveTodo(todo.id)} onToggleTodo={onToggleTodo} />
			))}
		</ul>
	);
};
