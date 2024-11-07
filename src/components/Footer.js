import React, { Component } from "react";
import "../assets/css/Footer.css";

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
            <div className="footer-content">
                <h2>Contáctame :</h2>
                <p><i class="fa-regular fa-envelope fa-lg" style={{marginRight: "8px"}}></i>Email: <a href="mailto:cornelioromeroborrero@gmail.com" style={{color: "black"}}>cornelioromeroborrero@gmail.com</a> </p> {/* Cambia esto por tu email real */}
                <p><i class="fa-solid fa-mobile-screen-button fa-lg" style={{marginRight: "10px"}}></i>Teléfono: +34 620512993</p> {/* Cambia esto por tu número real */}
                <h3><i class="fa-regular fa-registered fa-lg"></i> 2024. Cornelio Romero Borrero</h3>
            </div>
        </footer>
        );
    }
}

export default Footer;