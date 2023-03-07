import React from 'react';

import { useState } from 'react';
function CounterApp() {
	const [counter, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});
	const { counter1, counter2, counter3 } = counter;
	return (
		<>
			<h1>Counter 1: {counter1}</h1>
			<h1>Counter 2: {counter2}</h1>
			<h1>Counter 3: {counter3}</h1>

			<button className="btn default" onClick={(c) => setCounter({ ...counter, counter2: counter2 + 1 })}>
				+1
			</button>
		</>
	);
}

export default CounterApp;
