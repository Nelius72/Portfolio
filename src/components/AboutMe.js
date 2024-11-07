import React, { Component } from "react";
import styles from "../assets/css/AboutMe.module.css";
import miLogo from "../assets/images/foto_icono.jpeg"
class AboutMe extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.avatar}>
          <a href="https://www.linkedin.com/in/cornelio-romero-borrero-098055a5/" target="_blank">
            <img
              src={miLogo}
              alt="logo_Cornelio"
            />
          </a>
        </div>
        <div className={styles.content}>
          <h1>Hola, soy Cornelio Romero</h1>
          <h2 className={styles.gradientText}>Fullstack Junior Developer |JavaScript | React | Angular | Java | PHP | NodeJs | HTML5 | CSS3 | SQL/NoSQL</h2>
          <p>Más sobre mí:</p>
          <p>
            <span>
              <a href="https://www.linkedin.com/in/cornelio-romero-borrero-098055a5/" target="_blank">
                <i class="fa-brands fa-linkedin fa-2x" style={{ marginRight: "12px", color: "#21618c" }}></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/Nelius72" target="_blank">
                <i class="fa-brands fa-github fa-2x" style={{ marginRight: "12px", color: "#ffffff" }}></i>
              </a>
            </span>
            <span>
              <a href="https://x.com/Nelius72" target="_blank">
                <i class="fa-brands fa-x fa-2x" style={{ marginRight: "12px", color: "#ffffff" }}></i>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/nelius72/" target="_blank">
                <i class="fa-brands fa-instagram fa-2x" style={{ marginRight: "12px", color: "#a539a2" }}></i>
              </a>
            </span>
            
          </p>
          
        </div>
      </div>
    );
  }
}

export default AboutMe;
