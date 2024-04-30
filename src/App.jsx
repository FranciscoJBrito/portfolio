import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./layouts/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <Presentation />
      <h2 className="query_project_title">SELECT <span>*</span> FROM <span style={{fontFamily: "Pixel Font7"}}>projects</span></h2>
      <Projects />

      <Contact />
    </>
  );
}

export default App;
