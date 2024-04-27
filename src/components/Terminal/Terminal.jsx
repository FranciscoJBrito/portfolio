import "./Terminal.css";

const Terminal = () => {
  return (
    <div className="terminal_main_container">
      <div className="terminal_results">
            <p className="terminal_result">Welcome to my portfolio</p>
            <p className="terminal_result">Type 'help' to get a list of available commands</p>
      </div>
      <div className="prompt_container">
        <span className="dolar_symbol">$</span>
        <input type="text" className="command_input" placeholder="Type here..."/>
      </div>
    </div>
  );
};

export default Terminal;
