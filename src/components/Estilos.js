import React from 'react';
import './Estilos.css';
import moduleStyle from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos() {
	//TODO: Crear un objeto con los estilos deseados para luago pasar el objeto en donde deseamos aplicar esas propiedades.
	let misEstilos = {
		borderRadius: '.5rem',
		margin: '2rem auto',
		maxWidth: '50%',
	};

	//TODO: Otra manera es creando un archivo 'estilos.module.css' y dentro de él definir todos los estilos y clases necesarias
	//TODO: luego importarlos para luego utilizarlos, accediendo a ellos de la forma '<nombreImportado>.<nombreEstilo>'.
	//TODO: ver ejemplos en este código.
	return (
		<section className="estilos">
			<h2>Estilos CSS en React</h2>
			<h3 className="bg-react">Estilos CSS en hoja externa</h3>
			<h3 className="bg-react" style={{ borderRadius: '.25rem', margin: '1rem' }}>
				Estilos en linea (atributo style)
			</h3>
			<h3 className="bg-react" style={misEstilos}>
				Estilos en linea usando un objeto para pasar las propiedades css.
			</h3>
			<h3 className="bg-react" style={misEstilos}>
				Agregando Normalize con.
				<br></br>
				<code>@import-normalize;</code>
			</h3>

			<h5 className={moduleStyle.error}>
				Agregando un archivo que maneje el CSS como módulo (Estilos.module.css) el cual debe
				importarse.
			</h5>
			<h5 className={moduleStyle.success}>
				Agregando un archivo que maneje el CSS como módulo (Estilos.module.css) el cual debe
				importarse.
			</h5>

			{/*Estilos agregados utilizando SASS*/}

			<h5 className="bg-sass">
				Agregando un archivo que maneje el CSS como módulo (Estilos.module.css) el cual debe
				importarse.
			</h5>
		</section>
	);
}
