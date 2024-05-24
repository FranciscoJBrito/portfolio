import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="main_container_navbar">
      <h1>FRAN.</h1>
      <nav className="nav_container">
        <a href="#projects">PROYECTOS</a>
        <a href="#about">SOBRE MI</a>
        <Dropdown />
      </nav>
    </div>
  );
};

export default NavBar;
