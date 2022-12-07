import React, { useState } from 'react';

//TODO: La propiedad "defaultChecked" se coloca a los radio button para que la primera vez que se renderizan aparezca una
//TODO: opción seleccionada por defecto

export default function Formularios() {
	/* const [nombre, setNombre] = useState('');
	const [sabor, setSabor] = useState('');
	const [lenguaje, setLenguaje] = useState('');
	const [terminos, setTerminos] = useState(false); */

	//TODO: Variable para controlar el state de todo el formulario
	const [form, setForm] = useState({});

	//TODO: Función para controlar el estado de todos los campos del formulario que tienen el evento onChange()
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	//TODO: Función para controlar el estado de todos los campos del formulario que tienen el evento onChecked()
	const handleChecked = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('El formulario se ha enviado');
	};

	//TODO: En este formulario se tiene una variable de estado para controlar cada valor que se pide en el formulario
	//TODO: funciona pero, no es lo óptimo.
	return (
		<>
			<h3>Formulario</h3>
			{/* <form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre:</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				></input>
				<p>Elige un sabor favorito de JS favorito</p>
				<input
					type="radio"
					id="vanilla"
					name={sabor}
					value="vanilla"
					defaultChecked
					onChange={(e) => setSabor(e.target.value)}
				></input>
				<label htmlFor="vanilla">Vanilla</label>
				<input
					type="radio"
					id="react"
					name={sabor}
					value="react"
					onChange={(e) => setSabor(e.target.value)}
				></input>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="angular"
					name={sabor}
					value="angular"
					onChange={(e) => setSabor(e.target.value)}
				></input>
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="vue"
					name={sabor}
					value="vue"
					onChange={(e) => setSabor(e.target.value)}
				></input>
				<label htmlFor="vue">Vue</label>
				<input
					type="radio"
					id="svelte"
					name={sabor}
					value="svelte"
					onChange={(e) => setSabor(e.target.value)}
				></input>
				<label htmlFor="svelte">Svelte</label>

				<p>Elige una lenguaje de programación favorito</p>
				<select name={lenguaje} onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
					<option value="">---</option>
					<option value="js">JavaScript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">Go</option>
					<option value="rb">Ruby</option>
				</select>

				<label htmlFor="terminos">Acepto términos y condiciones</label>
				<input
					type="checkbox"
					id="terminos"
					name="terminos"
					value={terminos}
					onChange={(e) => setTerminos(e.target.checked)}
				></input>
				<br />
				<br />
				<input type="submit"></input>
			</form> */}
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre:</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={form.nombre}
					onChange={handleChange}
				></input>
				<p>Elige un sabor favorito de JS favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					defaultChecked
					onChange={handleChange}
				></input>
				<label htmlFor="vanilla">Vanilla</label>
				<input type="radio" id="react" name="sabor" value="react" onChange={handleChange}></input>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="angular"
					name="sabor"
					value="angular"
					onChange={handleChange}
				></input>
				<label htmlFor="angular">Angular</label>
				<input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}></input>
				<label htmlFor="vue">Vue</label>
				<input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange}></input>
				<label htmlFor="svelte">Svelte</label>

				<p>Elige una lenguaje de programación favorito</p>
				<select name="lenguaje" onChange={handleChange} defaultValue="">
					<option value="">---</option>
					<option value="js">JavaScript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">Go</option>
					<option value="rb">Ruby</option>
				</select>

				<label htmlFor="terminos">Acepto términos y condiciones</label>
				<input
					type="checkbox"
					id="terminos"
					name="terminos"
					value="terminos"
					onChange={handleChecked}
				></input>
				<br />
				<br />
				<input type="submit"></input>
			</form>
		</>
	);
}
