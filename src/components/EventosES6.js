import { Component } from 'react';

//TODO: Declaración de un componente "boton"
function Boton(props) {
	return <button onClick={props.myOnClick}>Componente Boton con evento personalizado</button>;
}

//TODO: Mejorando a "código más limpio",se pasa "props" para recibir el evento personalizado "myOnClic" y no requiere "return" porque
//TODO: las arrow function tiene un retorno implícito.
const Boton1 = (props) => (
	<button onClick={props.myOnClick}>Componente Boton con evento personalizado</button>
);

//TODO: Mejorando a "código más limpio",no requiere "props" por la desestructuración de propiedades y no requiere "return" porque
//TODO: las arrow function tiene un retorno implícito.
const Boton2 = ({ myOnClick }) => (
	<button onClick={myOnClick}>Componente Boton con evento personalizado</button>
);

//TODO: En el uso de componentes de clase se debe hacer el "binding" de cada función que se utiliza para activar algún evento.
//TODO: Este proceso según REACT se aconceja hacerlo en el constructor de la clase
//TODO: Este proceso según la versión ES6

export class EventosES6 extends Component {
	constructor(props) {
		super(props);
		this.state = { contador: 0 };

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

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
				<h3>Iniciando el estudio de eventos en componentes de clase según ES6</h3>
				<nav>
					<button onClick={this.sumar}>Mas 1</button>
					<button onClick={this.restar}>Menos 1</button>
				</nav>
				<h4>{this.state.contador}</h4>
			</div>
		);
	}
}

//TODO: Este proceso según la versión ES7 utilizando las Property Initializers
//TODO: Ya no requiere del constructor de la clase, se define una objeto llamado "state" con las variables
//TODO: además se define el binding de las funciones que manejan eventos con "arrow functions"
//TODO: Manejo de eventos según ES7

export class EventosES7 extends Component {
	state = { contador: 0 };

	//Método sumar
	sumar = (e) => {
		this.setState({ contador: this.state.contador + 1 });
	};

	//metodo restar
	restar = (e) => {
		this.setState({ contador: this.state.contador - 1 });
	};

	render() {
		return (
			<div>
				<h3>Iniciando el estudio de eventos en componentes de clase según ES7</h3>
				<nav>
					<button onClick={this.sumar}>Mas 1</button>
					<button onClick={this.restar}>Menos 1</button>
				</nav>
				<h4>{this.state.contador}</h4>
			</div>
		);
	}
}

//TODO: Más sobre eventos
//TODO: Pasando un parámetro desde un evento

export class MasSobreEventos extends Component {
	//método
	handleClic = (e, mensaje) => {
		console.log(e.target);
		console.log(mensaje);

		//Accediendo al evento "native" de JS
		console.log(e.nativeEvent.target);
	};

	render() {
		return (
			<div>
				<h2>Más sobre eventos</h2>
				<button onClick={(e) => this.handleClic(e, 'Este es un mensaje pasado desde un evento')}>
					Saludar
				</button>

				{/*Evento Personalizado asignado a un componente creado con React*/}
				<Boton2
					myOnClick={(e) => this.handleClic(e, 'Este es un mensaje pasado desde un evento')}
				></Boton2>
			</div>
		);
	}
}
