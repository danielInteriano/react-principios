import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';

export default function ComponentesEstilizados() {
	//TODO: La librería 'styledComponents' me permite crear componentes html propios que ya están estilizados.
	//TODO: como se muestra en el siguiente objeto, el nombre del objeto debe iniciar con mayúscula.
	let mainColor = '#db7093',
		mainColorHover = '#db709380';

	//TODO: Se puede crear una arrow function para la transition
	const setTransitionTime = (time) => `all ${time} ease-in-out`;

	//TODO: La librería 'styled' también nos permite definir animaciones dentro del componente a través de importaicón de
	//TODO: función 'keyframes' de la librería
	const fadeIn = keyframes`
		0%{
			opacity:0;
		}
		100%{
			opacity:1;
		}
	`;

	const MyH3 = styled.h3`
		padding: 2rem;
		text-align: center;
		color: ${(props) => props.color};

		//TODO: Desestructurando las propiedades para mejorar el código
		color: ${({ color }) => color};

		//TODO: CSS de forma condicional
		color: ${({ color }) => color || '#000'};
		background-color: ${mainColor};
		transition: ${setTransitionTime('0.5s')};
		animation: ${fadeIn} 2s ease-out;

		//TODO: Si queremos que una propiedad se comporte como un 'button' entonces importamos la función 'css'
		//TODO: de la librería 'styled'
		${({ isButton }) =>
			isButton &&
			css`
				margin: auto;
				max-width: 50%;
				border-radius: 0.25rem;
				cursor: pointer;
			`}

		&:hover {
			background-color: ${mainColorHover};
		}
	`;

	//TODO: el manejo de temas como 'dark' y 'ligth' lo realizamos con 'ThemeProvider' de la libreria 'styled-component'
	const ligth = {
		color: '#2F4F4F',
		bg: '#D3D3D3',
	};

	const dark = {
		color: '#D3D3D3',
		bg: '#2F4F4F',
	};

	const Box = styled.div`
		padding: 1rem;
		margin: 1rem;
		color: ${({ theme }) => theme.color};
		background-color: ${({ theme }) => theme.bg};
	`;

	//TODO: Puedo crear un componete 'etiqueta' que herede los atributos de otro componente previamente definido. Por ejemplo:
	const BoxRounded = styled(Box)`
		border-radius: 1rem;
	`;

	//TODO: Por último la libreria 'style-components' nos permite crear estilos globales. Para ello se debe poner el componente
	//TODO: que tiene los estilos globales al inicio de los demás componentes
	const GlobalStyle = createGlobalStyle`
		h3{
			padding:2rem;
			background-color:#fff;
			color:#61dafb;
			text-transform:uppercase;
		}
	`;

	//TODO: También se pueden pasar propiedades dentro del componente para que las asigne al CSS del componente así como
	//TODO: como se muestra en la etiqueta <MyH3> donde se le pasa la propiedad color

	return (
		<>
			<GlobalStyle></GlobalStyle>
			<h2>Componentes Estilizados - Libreria StyledComponent</h2>
			<MyH3>Soy una etiqueta h3 estilizada</MyH3>
			<MyH3 color="#61dafb">Soy una etiqueta h3 estilizada</MyH3>
			<MyH3 isButton>Soy una etiqueta 'h3'estilizada como 'button'</MyH3>
			<ThemeProvider theme={ligth}>
				<Box>Soy una caja con el tema ligth</Box>
				<BoxRounded theme={ligth}>
					Soy una caja con estilos propios que hereda las propiedades de la etiqueta Box
				</BoxRounded>
			</ThemeProvider>
			<ThemeProvider theme={dark}>
				<Box>Soy una caja con el tema dark</Box>
				<BoxRounded theme={dark}>
					Soy una caja con estilos propios que hereda las propiedades de la etiqueta Box
				</BoxRounded>
			</ThemeProvider>
		</>
	);
}
