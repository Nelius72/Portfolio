import React, { Component } from "react"; //Siempre que creemos un componente hay que importar React

class MiComponente extends Component {
  // Luego tenemos que crear la clase de mi componente y dentro  crear el método render
  // para mostrar al usuario la vista de ese componente.

  render() {
    //Con render mostramos el componente.
    return (
      <React.Fragment> {/*Si queremos devolver mas de un nodo o etiqueta debemos tener una etiqueta principal, en este caso un Fragment. Puede ser un div tb*/}
        <h1>Hola soy un componente</h1>
        <h2>Soy un componente de prueba</h2>
      </React.Fragment>
    );
  }
}

export default MiComponente; //Exportamos el componente para poder llamarlo desde otro lugar
