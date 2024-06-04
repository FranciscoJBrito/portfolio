import Terminal from "../Terminal/Terminal";
import WindowFrame from "../WindowFrame/WindowFrame";
import "./Presentation.css";
import { Trans } from "react-i18next";

const Presentation = () => {
  return (
    <div className="main_presentation_container">
      <div className="text_presentation_container">
        <p>
          <Trans 
            i18nKey={"description.title"}
            components={{1: <b />}}
          >
            <b>Desarrollador de software</b>, apasionado por la tecnología y <b>motivado por ayudar</b> y crecer profesionalmente.
          </Trans>
        </p>
        <br />
        <div className="stack_description">
          <p>
            Enfocado principalmente en el desarrollo de aplicaciones web con
            tres lenguajes: <br />
            JavaScript, TypeScript y Ruby.
          </p>
          <div className="stack_container">
            <h4>Ruby</h4>
            <p>Ruby on Rails.</p>
            <br />
            <h4>JavaScript & TypeScript</h4>
            <p>React, Node.js, Express.js</p>
          </div>
        </div>
      </div>
      <WindowFrame>
        <Terminal />
      </WindowFrame>
    </div>
  );
};

export default Presentation;
