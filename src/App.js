import React from 'react';
import './App.css';
import AjaxApis from './components/AjaxApis';
import CicloVida from './components/CicloVida';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncion';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import Estado from './components/Estado';
import { EventosES6, EventosES7, MasSobreEventos } from './components/EventosES6';
import Propiedades from './components/Propiedades';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
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
					<hr></hr>
					<Estado></Estado>
					<hr></hr>
					<RenderizadoCondicional></RenderizadoCondicional>
					<hr></hr>
					<RenderizadoElementos></RenderizadoElementos>
					<hr></hr>
					<EventosES6></EventosES6>
					<hr></hr>
					<EventosES7></EventosES7>
					<hr></hr>
					<MasSobreEventos></MasSobreEventos>
					<hr></hr>
					<ComunicacionComponentes></ComunicacionComponentes>
					<hr></hr>
					<CicloVida></CicloVida>
					<hr></hr>
					<AjaxApis></AjaxApis>
				</section>
			</header>
		</div>
	);
}

export default App;
