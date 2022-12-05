import React, { useState } from 'react';

//TODO: En este ejercicio se ponde en práctica el Hooks "useState" el cual permite definir cada variable del state
//TODO: como un arreglo de dos valores, el primero es la variable en sí y el segundo es la función que actualiza el
//TODO: stado de esa variable

export default function ContadorHooks(props) {
	const [contador, setContador] = useState(0);

	//funcion sumar
	const sumar = () => setContador(contador + 1);

	//funcion restar
	const restar = () => setContador(contador - 1);

	return (
		<>
			<h3>Hooks - useState</h3>
			<nav>
				<button onClick={sumar}>Aumentar 1</button>
				<button onClick={restar}>Disminuir 1</button>
			</nav>
			<h5>Contador de {props.titulo}</h5>
			<h4>{contador}</h4>
		</>
	);
}

//TODO:Se pueden agregar propiedades por defecto también aunque estas no se hayan especificado antes
ContadorHooks.defaultProps = { titulo: 'Clicks' };
