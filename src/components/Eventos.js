import { Component } from 'react';

export default class Eventos extends Component {
	constructor(props) {
		super(props);
		this.state = { contador: 0 };

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

	//TODO: En el uso de componentes de clase se debe hacer el "binding" de cada función que se utiliza para activar algún evento.
	//TODO: Este proceso según REACT se aconceja hacerlo en el constructor de la clase

	//Método sumar
	sumar() {
		this.setState({ contador: this.state.contador + 1 });
	}

	//metodo restar
	restar(e) {
		this.setState({ contador: this.state.contador - 1 });
	}

	render(e) {
		return (
			<div>
				<h3>Iniciando el estudio de eventos en componentes de clase</h3>
				<nav>
					<button onClick={this.sumar}>Mas 1</button>
					<button onClick={this.restar}>Menos 1</button>
				</nav>
				<h4>{this.state.contador}</h4>
			</div>
		);
	}
}
