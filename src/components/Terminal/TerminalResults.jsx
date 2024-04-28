export const TerminalResults = {
  help: (
    <div className="terminal_results">
      <span className="command">{'> help'}</span>
      <p className="terminal_result">Available commands:</p>
      <ul className="result_list ">
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
            <li>clear</li>
            <li>name</li>
            <li>lastname</li>
            <li>age</li>
            <li>favorite_tool</li>
      </ul>
    </div>
  ),
  clear: (
    <div className="terminal_results">
      <p className="terminal_result">Welcome to my portfolio</p>
      <p className="terminal_result">
        Type 'help' to get a list of available commands
      </p>
    </div>
  ),
  projects: (
    <div className="terminal_results">
      <p className="terminal_result">Projects:</p>
      <p className="terminal_result"></p>
    </div>
  ),
  name: (
    <div className="terminal_results">
      <p className="terminal_result">Francisco</p>
    </div>
  ),
  age: (
    <div className="terminal_results">
      <p className="terminal_result">23</p>
    </div>
  ),
  lastname: (
    <div className="terminal_results">
      <p className="terminal_result">Brito</p>
    </div>
  ),
  favorite_tool: (
    <div className="terminal_results">
      <p className="terminal_result">Docker</p>
    </div>
  ),
  invalidCommand: (
    <div className="terminal_results">
      <p className="terminal_result invalid">Invalid command</p>
    </div>
  ),
};
