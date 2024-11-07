import React, {Component} from "react";  //Al ser un componente estático no hace falta que lo definamos como tal, vale con que exportemos su contenido en 
                            // este caso. De ahí que salga Component subrayado en amarillo.

const MensajeEstatico = () => {
    return(
        <h5>Soy un mensaje estático</h5>
    );
}
export default MensajeEstatico;