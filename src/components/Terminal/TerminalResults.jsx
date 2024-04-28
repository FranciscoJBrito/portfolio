export const TerminalResults = {
  help: (
    <div className="terminal_results">
      <span className="command">{'> help'}</span>
      <p className="terminal_result">Available commands:</p>
      <ul className="result_list ">
            <li>help</li>
            <li>name</li>
            <li>age</li>
            <li>country</li>
            <li>goals</li>
            <li>favorite_tool</li>
            <li>clear</li>
      </ul>
    </div>
  ),
  clear: (
    <div className="terminal_results">
      <span className="command">{'> clear'}</span>
    </div>
  ),
  name: (
    <div className="terminal_results">
      <span className="command">{'> name'}</span>
      <p className="terminal_result">Francisco Javier Brito</p>
    </div>
  ),
  age: (
    <div className="terminal_results">
      <span className="command">{'> age'}</span>
      <p className="terminal_result">23 años</p>
    </div>
  ),
  favorite_tool: (
    <div className="terminal_results">
      <span className="command">{'> favorite_tool'}</span>
      <p className="terminal_result">Docker</p>
    </div>
  ),
  country: (
    <div className="terminal_results">
      <span className="command">{'> country'}</span>
      <p className="terminal_result">Argentina 🇦🇷</p>
    </div>
  ),
  goals: (
    <div className="terminal_results">
      <span className="command">{'> goals'}</span>
      <p className="terminal_result">Graduate as a computer engineer and found my own technology company</p>
    </div>
  ),
  default: (
    <div className="terminal_results">
      <p>Welcome to my portfolio</p>
      <p>Type 'help' to see available commands</p>
    </div>
  
  ),
  invalidCommand: (
    <div className="terminal_results">
      <p className="terminal_result invalid">Invalid command</p>
    </div>
  ),
};
