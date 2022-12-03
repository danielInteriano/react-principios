import React from 'react';
import './App.css';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncion';
import Propiedades from './components/Propiedades';
import logo from './logo.svg';

function App() {
	let usuario = 'Daniel Stanly Interiano Rápalo';
	return (
		<div className="App">
			<header className="App-header">
				<section>
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Bienvenido {usuario}</h1>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</section>
				<section>
					<ComponenteClase msg="Hola soy un componente de clase."></ComponenteClase>
					<hr></hr>
					<ComponenteFuncion msg="Este es un componente de función."></ComponenteFuncion>
					<hr></hr>
					<Propiedades
						cadena="Esta es una cadena"
						numero={10}
						booleano={true}
						arreglo={[1, 2, 3]}
						objeto={{ nombre: 'Daniel Interiano', email: 'danielstanly@yahoo.es' }}
						funcion={(num) => num * num}
						elementoReact={<i>Este es un elemento de React</i>}
						componenteReact={
							<ComponenteFuncion msg="Este es un componente pasado como props"></ComponenteFuncion>
						}
					></Propiedades>
				</section>
			</header>
		</div>
	);
}

export default App;
