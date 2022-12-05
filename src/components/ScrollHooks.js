import React, { useEffect, useState } from 'react';

export default function ScrollHooks() {
	const [scrollY, setScrollY] = useState(0);

	//TODO: Este "useEffect" se ejecuta cada vez (fase actualización - Ciclo de vida) que cambia el state de la variable 'scrollY'
    //TODO: Cuando en el Hook 'useEffect' se ejecuta el método 'return' se establece la fase de desmontaje
    //TODO: es un buen momento para 'desuscribirse de servicios, desconectarse de APIs, limpiar intervalos de tiempo,
    //TODO: limpiar manejadores de eventos, entre otros.
    
	useEffect(() => {
		console.log('Moviendo scroll');

		const detertarScroll = () => setScrollY(window.pageYOffset);
		window.addEventListener('scroll', detertarScroll);

		return () => {
			window.removeEventListener('scroll', detertarScroll);
			console.log('Fase de desmontaje');
		};
	}, [scrollY]);

	//TODO: Esta función solo se ejecuta una vez (Fase de montaje - Ciclo de vida), cuando se especifica vacío el arreglo de parámetros
	useEffect(() => {
		console.log('Fase de montaje');
	}, []);

	//TODO: no se aconseja dejar 'useEffect' sin su segundo parámetro.
	useEffect(() => console.log('Fase de actualización'));

	

	return (
		<>
			<h3>Hooks - useEffects y Ciclo de Vida</h3>
			<p>Scroll Y del navegador {scrollY}px</p>
		</>
	);
}
