import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import "./assets/css/MenuLateral.css";
import "./assets/css/Proyectos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@coreui/icons/css/all.css"; // Importa todos los estilos de CoreUI Icons
import "@coreui/icons/css/brand.css"; // Solo iconos de marca (como cib-mongodb)

//IMPORTAR COMPONENTES Aqui podemos llamar o importar cualquier componente que hayamos creado
import MiComponente from "./components/MiComponente";
import Proyectos from "./components/Proyectos";
import MenuLateral from "./components/MenuLateral";
import AboutMe from "./components/AboutMe";
import Habilidades from "./components/Habilidades";
import Cv from "./components/Cv";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <section id= "aboutme" className="AboutMe">
          <AboutMe />
        </section>
      </header>
      <section id="curriculum" className="Curriculum">
        <Cv/>
      </section>
      <section id="proyectos" className="ProjectCards">
        <Proyectos />
      </section>
      <section className="SideMenu">
        <MenuLateral />
      </section>
      <section id="habilidades" className="Skills">
        <Habilidades />
      </section>
      <footer id="footer" className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
