import React, { Component } from 'react';

export default class Padre extends Component {
	state = { contador: 0 };

	//Metodo de clase Padre para incrementar contador
	incrementarContador = (e) => {
		this.setState({ contador: this.state.contador + 1 });
	};

	render() {
		return (
			<div>
				<h3>Comunicación entre componentes</h3>
				<h5>{this.state.contador}</h5>
				<Hijo
					incrementarContador={this.incrementarContador}
					mensaje="Mensaje para el hijo 1"
				></Hijo>
				<Hijo
					incrementarContador={this.incrementarContador}
					mensaje="Mensaje para el hijo 2"
				></Hijo>
			</div>
		);
	}
}

/*La comunicación de padre a hijo se realiza a través de las "props"*/
function Hijo(props) {
	return (
		<>
			<h4>{props.mensaje}</h4>
			<button onClick={props.incrementarContador}>Incrementar 1</button>
		</>
	);
}
