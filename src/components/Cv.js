import React, { Component } from "react";
import styles from "../assets/css/Cv.module.css";

class Cv extends Component {
  render() {
    return (
        
        <a href="https://drive.google.com/file/d/1XZ460Ly9r8g_pgrpy3iJh4_iDf4Mfuby/view?usp=sharing" target="_blank">
        <button
          type="button"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnPrimary}`}
        >
          Ver / Descargar CV
          <i className="fa-solid fa-file-lines" style={{ marginLeft: "12px" }}>
            
          </i>
        </button>
        </a>
        
    );
  }
}

export default Cv;
