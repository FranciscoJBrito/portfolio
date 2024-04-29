export const TerminalResults = {
  help: (
    <div className="terminal_results">
      <span className="command">{'> help'}</span>
      <p className="terminal_result">Comandos disponibles:</p>
      <ul className="result_list ">
            <li>help:  Todos los comandos disponibles</li>
            <li>name:  Mi nombre completo</li>
            <li>age:   Mi edad</li>
            <li>country:  Mi país</li>
            <li>goals:  Mis metas</li>
            <li>favorite_tool:  Mi herramienta favorita</li>
            <li>clear:  Limpia la consola</li>
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
      <p className="terminal_result">Graduarme como ingeniero en computación y fundar mi propia empresa tecnológica</p>
    </div>
  ),
  default: (
    <div className="terminal_results">
      <p className="terminal_result">Bienvenido a mi portafolio:</p>
      <p className="terminal_result">Esta es una terminal interactiva en donde puedes conocer un poco mas sobre mi.</p>
      <p className="terminal_result">Escribe <span className="command">help</span> para ver los comandos disponibles.</p>
    </div>
  
  ),
  invalidCommand: (
    <div className="terminal_results">
      <p className="terminal_result invalid">Comando invalido</p>
    </div>
  ),
};
