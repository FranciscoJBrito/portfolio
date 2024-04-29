import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <>
      <Hero />
      <Presentation />
      <h2 className="query_project_title">SELECT <span>*</span> FROM <span style={{fontFamily: "Pixel Font7"}}>projects</span></h2>
      <Contact />
    </>
  );
}

export default App;
