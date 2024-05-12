import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Presentation from "./components/Presentation/Presentation";
import AboutMe from "./layouts/AboutMe/AboutMe";
import Projects from "./layouts/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <Presentation />
      <h2 id="projects" className="query_project_title">
        SELECT <span>*</span> FROM{" "}
        <span style={{ fontFamily: "Pixel Font7" }}>projects</span>
        <span style={{ color: "white" }}>;</span>
      </h2>
      <Projects />
      <h2 id="about" className="query_about_me_title">
        SELECT <span>*</span> FROM{" "}
        <span style={{ fontFamily: "Pixel Font7" }}>me</span>
        <span style={{ color: "white" }}>;</span>
      </h2>
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
