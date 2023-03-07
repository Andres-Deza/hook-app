import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, id, sprites }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });
	useLayoutEffect(() => {
		// console.log(pRef.current.getBoundingClientRect());
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [name]);
	return (
		<>
			<blockquote className="blockquote text-end" style={{ display: 'flex' }}>
				<p ref={pRef}>Nombre: {name}</p>
				<img src={sprites.front_default} alt={name} />
				<footer>Numero en Pokedex: {id}</footer>
			</blockquote>
			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
