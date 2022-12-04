import React, { Component } from 'react';

function EstadoAHijo(props) {
	return (
		<div>
			<h3>{props.contadorHijo}</h3>
		</div>
	);
}

export default class Estado extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};

		//metodo para afectar el State pero sin haber estudiado eventos. Lo hice con un setInterval()
		/* setInterval(() => {
			this.setState({
				contador: this.state.contador + 1,
			});
		}, 1000); */
	}

	//función render de react
	render() {
		return (
			<div>
				<h1>El State</h1>
				<p>{this.state.contador}</p>
				<EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
				<p>{}</p>
			</div>
		);
	}
}
