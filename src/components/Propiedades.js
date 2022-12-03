import PropTypes from 'prop-types';
import React from 'react';

export default function Propiedades(props) {
	return (
		<div>
			<h1>{props.porDefecto}</h1>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
				<li>{props.arreglo.join(', ')}</li>
				<li>{props.objeto.nombre + ' - ' + props.objeto.email}</li>
				<li>{props.arreglo.map(props.funcion).join(', ')}</li>
				<li>{props.elementoReact}</li>
				<li>{props.componenteReact}</li>
			</ul>
		</div>
	);
}

Propiedades.defaultProps = {
	porDefecto: 'Las Props',
};

Propiedades.propTypes = {
	numero: PropTypes.number,
};
