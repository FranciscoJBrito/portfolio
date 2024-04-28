export const TerminalResults = {
  help: (
    <div className="terminal_results">
      <p className="terminal_result">Available commands:</p>
      <p className="terminal_result">about</p>
      <p className="terminal_result">projects</p>
      <p className="terminal_result">contact</p>
      <p className="terminal_result">clear</p>
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
  invalidCommand: (
    <div className="terminal_results">
      <p className="terminal_result">Invalid command</p>
    </div>
  ),
};
