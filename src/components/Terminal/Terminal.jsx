import "./Terminal.css";
import { useState } from "react";
import { TerminalResults } from "./TerminalResults";

const Terminal = () => {
  const [commandResults, setCommandResults] = useState(TerminalResults.clear);

  const cases = (command) => {
    switch (command) {
      case "help":
        return "help";
      case "about":
        return "about";
      case "projects":
        return "projects";
      case "contact":
        return "contact";
      case "clear":
        return "clear";
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
      {commandResults}
      <div className="prompt_container">
        <span className="dolar_symbol">$</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="command_input"
            placeholder="Type here..."
            onChange={handleChange}
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
