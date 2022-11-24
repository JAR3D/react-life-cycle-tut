import FunctionWithoutState from "./components/FunctionWithoutState";
import FunctionWithState from "./components/FunctionWithState";

import './App.css';

function App() {


  console.log('#', { component: 'App', log: 'before return'});
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FunctionWithoutState />
        <FunctionWithState />
    </div>
  );
}

export default App;
