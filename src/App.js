import React from 'react';
import './App.css';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncion';
import logo from './logo.svg';

function App() {
	let usuario = 'Daniel Stanly Interiano Rápalo';
	return (
		<div className="App">
			<header className="App-header">
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
			</header>
			<section>
				<ComponenteClase msg="Hola soy un componente de clase."></ComponenteClase>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</section>
			<ComponenteFuncion msg="Este es un componente de función."></ComponenteFuncion>
		</div>
	);
}

export default App;
