import React, { Component } from "react";
import MensajeEstatico from "./ComponenteEstatico";
import styles from "../assets/css/Proyectos.css";
import imgportfolio from "../assets/images/portfolio.jpg"

class Proyectos extends Component {
  render() {
    return (
      <div className="wrapper">
     <h1 className="customTitle">Mis Proyectos</h1>
        

        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');" onClick={() => window.open("https://github.com/Nelius72/Symphonic-Solutions", "_blank")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488630228244-bcdf33562a43?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yY2hlc3RyYXxlbnwwfHwwfHx8MA%3D%3D)' }}
              >
                <div className="inner">
                  <p>Symphonic Solutions</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                  Web diseñada para gestionar diversas actividades de asociaciones y grupos relacionados con la música, como bandas, orquestas y escuelas de música.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');" onClick={() => window.open("https://github.com/Nelius72/Reproductor-Multimedia", "_blank")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: 'url(https://i.pinimg.com/originals/87/1b/ba/871bba2cb4f22d031139cdb2f59cbac3.jpg)' }}
              >
                <div className="inner">
                  <p>Reproductor Multimedia</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Reproductor de música y video elaborado con Android Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');" onClick={() => window.open("https://github.com/Nelius72/Web-Angular", "_blank")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/code-background-developer-doing-error-600nw-2207966825.jpg)' }}
              >
                <div className="inner">
                  <p>Web Angular</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Web blog sobre videojuegos creado como método para aprender Angular y su funcionamiento
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');" onClick={() => window.open("https://github.com/Nelius72/Sitio-Web-PHP", "_blank")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: 'url(https://images2.alphacoders.com/698/698137.jpg)' }}
              >
                <div className="inner">
                  <p>Sitio Web PHP</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Web/portfolio sobre mis aficiones realizado con PHP durante mi etapa de aprendizaje
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');" onClick={() => window.open("https://github.com/Nelius72/portfolio", "_blank")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${imgportfolio})` }} /*Así se añaden imagenes locales*/
              >
                <div className="inner">
                  <p>Portfolio Web</p>
                  <span></span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Portfolio personal realizado con React,Javascript, HTML5 y CSS3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyectos;
