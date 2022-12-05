import React, { Component } from 'react';

//Componente funcional para mostrar un pokemon
function Pokemon(props) {
	return (
		<figure>
			<img src={props.avatar} alt={props.name}></img>
			<figcaption>{props.name}</figcaption>
		</figure>
	);
}

export default class AjaxApis extends Component {
	state = { pokemons: [] };

	//TODO: Para hacer peticiones a una API, estas peticiones de deben hacer dentro del método "componentDidMount()"

	componentDidMount() {
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
							let pokemons = [...this.state.pokemons, pokemon];
							this.setState({ pokemons });
						});
				});
			});
	}

	render() {
		return (
			<>
				<h3>Peticiones Asincronas en Componentes de Clase</h3>

				{this.state.pokemons.map((el) => (
					<Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>
				))}
			</>
		);
	}
}
