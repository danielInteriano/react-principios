import React, { Component } from 'react';

class Reloj extends Component {
	/* constructor(props) {
		super(props);
		this.state = {};
	} */

	//método propio de React - Ciclo de Vida
	componentWillUnmount() {
		console.log(3, 'componentWillUnmount: El componente ha sido eliminado del DOM');
	}

	render() {
		return <h3>{this.props.hora}</h3>;
	}
}

export default class CicloVida extends Component {
	constructor(props) {
		super(props);
		console.log(0, 'Constructor: El componente se inicializa, aun no está en el DOM');

		this.state = { hora: new Date().toLocaleTimeString(), visible: false };

		this.temporizador = null;
	}

	//método tictac para activar el temporalizador del reloj
	tictac = () => {
		this.temporizador = setInterval(() => {
			this.setState({ hora: new Date().toLocaleTimeString() });
		}, 1000);
	};

	//metodo propio de React - Ciclo de Vida
	componentDidMount() {
		console.log(1, 'componenteDitMount: El componente ya se encuentra en el DOM');
	}

	//método propio de React - Ciclo de Vida
	componentDidUpdate(prevProps, prevState) {
		console.log(2, 'El state o las props del componente han cambiado');
		console.log(prevProps, prevState);
	}

	//método iniciar
	iniciar = () => {
		this.tictac();
		this.setState({ visible: true });
	};

	//método detener
	detener = () => {
		clearInterval(this.temporizador);
		this.setState({ visible: false });
	};

	render() {
		console.log(4, 'Render: El componente se dibuja(o redibuja por algún cambio) en el DOM');
		return (
			<>
				<h3>Ciclo de Vida de los Componentes de Clase</h3>
				{this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
				<button onClick={this.iniciar}>Iniciar</button>
				<button onClick={this.detener}>Detener</button>
			</>
		);
	}
}
