import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';
import { useMemo, useState } from 'react';

const heavyStuff = (iteraciones = 1000) => {
	for (let i = 0; i < iteraciones; i++) {
		console.log('Se ejecuto trabajo pesado');
	}
	return `Iteraciones realizadas ${iteraciones}`;
};
export const MemoHook = () => {
	const { counter, increment } = useCounter(1000);

	const [show, setShow] = useState(true);

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
	return (
		<>
			<h1>
				Counter <Small value={counter} />
			</h1>
			<h4>{memorizedValue}</h4>
			<button onClick={() => increment()}>Incrementar</button>
			<button className="btn btn-outline-primaru" onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
