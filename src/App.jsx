import "./App.css";
import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Presentation from "./components/Presentation/Presentation";
import Popup from "./components/Popup/Popup";
import Projects from "./layouts/Projects/Projects";

function App() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <Hero />
      <Presentation />
      <h2 className="query_project_title">
        SELECT <span>*</span> FROM{" "}
        <span style={{ fontFamily: "Pixel Font7" }}>projects</span>
      </h2>
      <Projects handle={handlePopup} />
      <Popup
        title={"Airbnb Clone"}
        image={"./mockup-airbnb-light.png"}
        tech={["tailwind", "postgresql", "docker", "ruby", "javascript", "rails"]}
        state={popup}
        handle={handlePopup}
      />
      <Contact />
    </>
  );
}

export default App;
