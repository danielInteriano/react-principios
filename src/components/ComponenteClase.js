import { Component } from 'react';

//Componente de clase
//Extiende de Componente de React y utiliza el método render para renderizar su contenido en el DOM.
class ComponenteClase extends Component {
	render() {
		return <h2>{this.props.msg}</h2>;
	}
}
export default ComponenteClase;
