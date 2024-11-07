import React, {Component} from "react";

class MenuLateral extends Component{

    render(){
        return(

          <ul class="side-menu">
          <li><a href="#"><span class="fa fa-bars"></span>Portfolio Cornelio Romero</a></li>
          <li><a href="#aboutme"><span class="fa-solid fa-circle-user"></span>Sobre Mí</a></li>
          <li><a href="#curriculum"><span class="fa-solid fa-file-lines"></span>Currículum</a></li>
          <li><a href="#proyectos"><span class="fa-solid fa-list-check"></span>Proyectos</a></li>
          <li><a href="#habilidades"><span class="fa fa-check-square"></span>Habilidades</a></li>
          <li><a href="#footer"><span class="fa-solid fa-message"></span>Contacto</a></li>
          </ul>
        );
    }
}

export default MenuLateral;