import React from 'react';
import './App.css';
import RelojHooks from './components/RelojHooks';
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
					{/* <ComponenteClase msg="Hola soy un componente de clase."></ComponenteClase>
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
					<hr></hr>
					<ContadorHooks></ContadorHooks>
					<hr></hr>
					<ScrollHooks></ScrollHooks>
					<hr></hr> */}
					<RelojHooks></RelojHooks>
				</section>
			</header>
		</div>
	);
}

export default App;
