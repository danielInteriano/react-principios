//Componente de Función
//Este se declara como una función y un valor de retorno que es el contenido que se quiere renderizar en el DOM.
//Para las propiedades se pasa el objeto 'props' como parémetro y luego se indican las propiedades como 'props.nombrePropiedad'.

function ComponenteFuncion(props) {
	return <h2>{props.msg}</h2>;
}
export default ComponenteFuncion;
