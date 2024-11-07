import React, { Component } from "react";
import styles from "../assets/css/Skills.module.css";


class Habilidades extends Component {
  render() {
    return (
      <div className="Habilidades">
        <div className={styles.skills}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1>Mis Habilidades</h1>
              <h2>Frontend</h2>
            </div>

            <div className={styles.skillcard}>
              <div className={styles.card}>
                <i class="fa-brands fa-js" style={{ color: "#e1f305" }}></i>
                <h4>Javascript</h4>
                <h5>7/10</h5>
              </div>

              <div className={styles.card}>
                <i
                  class="fa-brands fa-angular"
                  style={{ color: "#f30c05" }}
                ></i>
                <h4>Angular</h4>
                <h5>7/10</h5>
              </div>
              <div className={styles.card}>
                <i class="fa-brands fa-react" style={{ color: "#05d6f3" }}></i>
                <h4>React</h4>
                <h5>7/10</h5>
              </div>
              <div className={styles.card}>
                <i class="fa-brands fa-vuejs" style={{ color: "#078407" }}></i>
                <h4>Vue</h4>
                <h5>5/10</h5>
              </div>

              <div className={styles.card}>
                <i
                  class="fa-brands fa-css3-alt"
                  style={{ color: "#0c69cb" }}
                ></i>
                <h4>Css3</h4>
                <h5>8/10</h5>
              </div>

              <div className={styles.card}>
                <i class="fa-brands fa-html5" style={{ color: "#cb800c" }}></i>
                <h4>HTML5</h4>
                <h5>8/10</h5>
              </div>

              <div className={styles.card}>
                <i class="fa-solid fa-hashtag" style={{ color: "#8e0ccb" }}></i>
                <h4>C#</h4>
                <h5>6/10</h5>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.text}>
              <h2>Backend</h2>
            </div>

            <div className={styles.skillcard}>
              <div className={styles.card}>
                <i class="fa-brands fa-node-js" style={{ color: "#0e9014" }}></i>
                <h4>Node.js</h4>
                <h5>6/10</h5>
              </div>

              <div className={styles.card}>
                <i class="cib-mongodb" style={{ color: "#26bf2d" }}></i>
                <h4>MongoDB</h4>
                <h5>6/10</h5>
              </div>
              <div className={styles.card}>
                <i class="cib-postgresql" style={{ color: "#2695bf" }}></i>
                <h4>PostgreSQL</h4>
                <h5>6/10</h5>
              </div>
              <div className={styles.card}>
                <i class="cib-mysql" style={{ color: "#20d3e5" }}></i>
                <h4>MySQL</h4>
                <h5>6/10</h5>
              </div>

              <div className={styles.card}>
                <i class="cib-postman" style={{ color: "#cb800c" }}></i>
                <h4>Postman</h4>
                <h5>6/10</h5>
              </div>

              <div className={styles.card}>
                <i class="fa-brands fa-java" style={{ color: "#d4481f" }}></i>
                <h4>Java</h4>
                <h5>6/10</h5>
              </div>

              <div className={styles.card}>
                <i class="cib-php" style={{ color: "#ffffff " }}></i>
                <h4>PHP</h4>
                <h5>7/10</h5>
              </div>
            </div>
            {/*<a href="#">See All Skills</a>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Habilidades;
