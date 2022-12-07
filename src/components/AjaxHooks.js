import React, { useEffect, useState } from 'react';

//Componente funcional para mostrar un pokemon
function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name}></img>
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default function AjaxHooks() {
	const [pokemons, setPokemons] = useState([]);

	//TODO: Este "useEffect" se construyó haciendo la petición a la API a través de "fetch".
	/* useEffect(() => {
		let url = 'https://pokeapi.co/api/v2/pokemon/';
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				json.results.forEach((el) => {
					fetch(el.url)
						.then((res) => res.json())
						.then((json) => {
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default,
							};
							setPokemons((pokemons) => [...pokemons, pokemon]);
						});
				});
			});
		return () => {};
	}, []); */

	//TODO: Usando funciones asíncronas el "useEffect" anterior podría utilizarse de la manera siguiente:
	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json();
			console.log(json);

			json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json();

				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};
				setPokemons((pokemons) => [...pokemons,pokemon]);
			});
		};

		getPokemons('https://pokeapi.co/api/v2/pokemon/');
	}, []);

	return (
		<>
			<h3>Peticiones Asíncronas con Hooks</h3>
			{pokemons.length === 0 ? (
				<h5>Cargando...</h5>
			) : (
				pokemons.map((el) => <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>)
			)}
		</>
	);
}
