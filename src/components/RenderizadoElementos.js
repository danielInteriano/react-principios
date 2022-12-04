import React, { Component } from 'react';
import data from '../helpers/data.json';

function ElementoLista(props) {
	return (
		<li>
			<a href={props.elemento.web} target="_blank" rel="noreferrer">
				{props.elemento.name}
			</a>
		</li>
	);
}

export default class RenderizadoElementos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			estaciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
			frameworks: <ElementoLista></ElementoLista>,
		};
	}

	render() {
		console.log(data);
		return (
			<div>
				<h3>Renderizado de Elementos</h3>
				<ol>
					{this.state.estaciones.map((elemento, indice) => (
						<li key={indice}>{elemento}</li>
					))}
				</ol>
				<ul>
					{data.frameworks.map((elemento) => (
						<ElementoLista key={elemento.id} elemento={elemento}></ElementoLista>
					))}
				</ul>
			</div>
		);
	}
}
