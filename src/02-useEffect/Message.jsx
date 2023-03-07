import { useEffect, useState } from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const { x, y } = coords;
	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoords({ x, y });
		};
		addEventListener('mousemove', onMouseMove);
		return () => {
			removeEventListener('mousemove', onMouseMove);
			// console.log('Mensaje unmounted');
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
			<p>
				X: {x} Y: {y}
			</p>
		</>
	);
};
