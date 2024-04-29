import "./Terminal.css";
import { useState } from "react";
import { TerminalResults } from "./TerminalResults";

const Terminal = () => {
  const [commandResults, setCommandResults] = useState(TerminalResults.default);

  const cases = (command) => {
    switch (command) {
      case "help":
        return "help";
      case "clear":
        return "clear";
      case "name":
        return "name";
      case "age":
        return "age";
      case "favorite_tool":
        return "favorite_tool";
      case "country":
        return "country";
      case "goals":
        return "goals";
      default:
        return "invalidCommand";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0];
    const value = input.value;
    const command = cases(value);
    setCommandResults(TerminalResults[command]);
    input.value = "";
  };

  const handleChange = (e) => {
    const input = e.target;
    const value = input.value;
    const validCommand = cases(value);
    if (validCommand != "invalidCommand") {
      input.classList.add("existing_command");
    } else {
      input.classList.remove("existing_command");
    }
  };

  return (
    <div className="terminal_main_container">
      <>
      {commandResults}
      </>
      <div className="prompt_container">
        <span className="dolar_symbol">$</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="command_input"
            placeholder="Escribe aquí..."
            onChange={handleChange}
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
