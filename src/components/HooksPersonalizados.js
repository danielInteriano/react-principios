import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados() {
	//let url = 'https://pokeapi.co/api/v2/pokemon/';
	let url = 'https://jsonplaceholder.typicode.com/users';
	let { data, isPending, error } = useFetch(url);
	return (
		<>
			<h3>Hooks Personalizados</h3>
			<h5>{JSON.stringify(isPending)}</h5>
			<h5>
				<mark>{JSON.stringify(error)}</mark>
			</h5>
			<pre>
				<code>{JSON.stringify(data)}</code>
			</pre>
		</>
	);
}
