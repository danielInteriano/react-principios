import React, { useRef } from 'react';

export default function Referencias() {
	//TODO: Las referencias en React las utilizamos para no manipular directamente los elementos del DOM.
	//TODO: Primero construimos la función para ocultar el menú no utilizando 'Referencias'
	//TODO: Si se utiliza un classComponent y queremos crear una referencia a un elemento del DOM utilizamos 'createRef' así:
	//TODO: "let refMenu = createRef()"
	/* const handleTogleMenu = (e) => {
		const $menu = document.getElementById('menu');
		if (e.target.textContent === 'Menú') {
			e.target.textContent = 'Cerrar';
			$menu.style.display = 'block';
		} else {
			e.target.textContent = 'Menú';
			$menu.style.display = 'none';
		}
	}; */

	//TODO: Como en este ejercicio estamos utilizando componentes funcionales creamos una 'referencia' así:
	//TODO: "let refMenu = useRef()"
	let refMenu = useRef(),
		refMenuBtn = useRef();

	console.log(refMenu, refMenuBtn);

	const handleTogleMenu = () => {
		if (refMenuBtn.current.textContent === 'Menú') {
			refMenuBtn.current.textContent = 'Cerrar';
			refMenu.current.style.display = 'block';
		} else {
			refMenuBtn.current.textContent = 'Menú';
			refMenu.current.style.display = 'none';
		}
	};

	return (
		<>
			<h3>Uso de Referencias</h3>
			<button ref={refMenuBtn} onClick={handleTogleMenu}>
				Menú
			</button>
			<nav ref={refMenu} style={{ display: 'none' }}>
				<a href="#">Sección 1</a>
				<br></br>
				<a href="#">Sección 2</a>
				<br></br>
				<a href="#">Sección 3</a>
				<br></br>
				<a href="#">Sección 4</a>
				<br></br>
				<a href="#">Sección 5</a>
			</nav>
		</>
	);
}
