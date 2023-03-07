import { useFetch } from './../hooks/useFetch';

import { useCounter } from './../hooks/useCounter';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
	// console.log(isLoading);
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
	// console.log(data, isLoading, hasError);
	const { name, id, sprites } = !isLoading && data;

	const onNextPokemon = () => {
		increment(1);
		console.log(data);
	};
	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<h2>Multiple Custom Hooks, Pokedex Counter:{counter}</h2>
					<hr />
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">{isLoading ? <LoadingQuote /> : <Quote name={name} id={id} sprites={sprites} />}</div>
			</div>
			<button disabled={isLoading} className="btn btn-primary" onClick={onNextPokemon}>
				Siguiente pokemon
			</button>
		</>
	);
};
