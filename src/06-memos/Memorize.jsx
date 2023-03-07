import { useCounter } from './../hooks/useCounter';
import { Small } from './Small';
import { useState } from 'react';

export const Memorize = () => {
	const { counter, increment } = useCounter();

	const [show, setShow] = useState(true);
	return (
		<>
			<h1>
				Counter <Small value={counter} />
			</h1>
			<button onClick={() => increment()}>Incrementar</button>
			<button className="btn btn-outline-primaru" onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
